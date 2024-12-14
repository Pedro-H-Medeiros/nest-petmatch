import {
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { hash } from 'bcryptjs'
import { z } from 'zod'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'

const userRole = ['MEMBER', 'ADMIN', 'ONG_ADMIN', 'USER'] as const

const createUserControllerBodySchema = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(userRole).optional(),
})

type CreateUserControllerBodySchema = z.infer<
  typeof createUserControllerBodySchema
>

@Controller('/accounts')
export class CreateUserController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserControllerBodySchema))
  async create(@Body() body: CreateUserControllerBodySchema) {
    const { name, cpf, email, password, role } = body

    const existingUser = await Promise.all([
      this.userAlreadyExists('cpf', cpf),
      this.userAlreadyExists('email', email),
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
        password: passwordHash,
        role: role || 'MEMBER',
      },
    })
  }

  private async userAlreadyExists(field: 'cpf' | 'email', value: string) {
    return await this.prisma.user.findFirst({
      where: { [field]: value },
    })
  }
}
