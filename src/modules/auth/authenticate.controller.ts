import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { PrismaService } from '@/prisma/prisma.service'
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcryptjs'
import { z } from 'zod'
import { Public } from './public-routes.decorator'

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
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  @Public()
  @Post()
  @UsePipes(new ZodValidationPipe(authenticateControllerBodySchema))
  async handle(@Body() body: AuthenticateControllerBodySchema) {
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

    const accessToken = this.jwt.sign({ sub: user.id })

    return {
      accessToken,
    }
  }
}
