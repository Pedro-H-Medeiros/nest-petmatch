import {
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { hash } from 'bcrypt'
import { z } from 'zod'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import validator from 'validator'
import { UserRole } from '@prisma/client'

const createUserControllerBodySchema = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string().email(),
  phone: z.string().refine(validator.isMobilePhone),
  password: z.string().min(8),
  image_url: z.string(),
  role: z.nativeEnum(UserRole).optional(),
})

type CreateUserControllerBodySchema = z.infer<
  typeof createUserControllerBodySchema
>

@Controller('/accounts')
export class CreateUserController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserControllerBodySchema))
  async handle(@Body() body: CreateUserControllerBodySchema) {
    const { name, cpf, email, phone, password, image_url, role } = body

    const existingUser = await Promise.all([
      this.userAlreadyExists('cpf', cpf),
      this.userAlreadyExists('email', email),
      this.userAlreadyExists('phone', phone),
    ])

    if (existingUser.some((user) => user)) {
      throw new ConflictException()
    }

    const passwordHash = await hash(password, 8)

    return await this.prisma.user.create({
      data: {
        name,
        cpf,
        email,
        phone,
        password: passwordHash,
        image_url,
        role: role || 'MEMBER',
      },
    })
  }

  private async userAlreadyExists(
    field: 'cpf' | 'email' | 'phone',
    value: string,
  ) {
    return await this.prisma.user.findFirst({
      where: { [field]: value },
    })
  }
}
