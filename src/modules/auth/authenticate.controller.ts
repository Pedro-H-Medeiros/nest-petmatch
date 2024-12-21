import { Env } from '@/env'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { PrismaService } from '@/prisma/prisma.service'
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'
import { Response, Request } from 'express'
import { z } from 'zod'

const authenticateControllerBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AuthenticateControllerBodySchema = z.infer<
  typeof authenticateControllerBodySchema
>

@Controller('sessions')
export class AuthenticateController {
  constructor(
    private config: ConfigService<Env, true>,
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authenticateControllerBodySchema))
  async handle(
    @Body() body: AuthenticateControllerBodySchema,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email, password } = body

    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('User credentials does not match.')
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials does not match.')
    }

    const accessToken = this.jwt.sign(
      { sub: user.id },
      {
        privateKey: this.config.get('JWT_PRIVATE_KEY'),
        algorithm: 'RS256',
      },
    )

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 24 * 60 * 60 * 1000,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })

    return {
      accessToken,
    }
  }

  @Get('validate')
  async validateToken(@Req() req: Request) {
    const token = req.cookies.access_token

    if (!token) {
      throw new UnauthorizedException('Token not found.')
    }

    try {
      const payload = await this.jwt.verify(token)
      return {
        isValid: true,
        payload,
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token.')
    }
  }
}
