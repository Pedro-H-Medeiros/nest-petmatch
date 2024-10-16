import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { PrismaService } from '@/prisma/prisma.service'
import {
  Body,
  ConflictException,
  Controller,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'

const createOngControllerBodySchema = z.object({
  name: z.string(),
  description: z.string(),
  image_user: z.string().url(),
  image_urls: z.array(z.string().url()),
})

type CreateOngControllerSchema = z.infer<typeof createOngControllerBodySchema>

@Controller('instituation')
@UseGuards(JwtAuthGuard)
export class CreateOngController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createOngControllerBodySchema))
  async create(@Body() body: CreateOngControllerSchema) {
    const { name, description, image_user, image_urls } = body

    const existingOng = await this.prisma.ong.findFirst({
      where: { name },
    })

    if (existingOng) {
      throw new ConflictException('This ong name already exists.')
    }

    return await this.prisma.ong.create({
      data: {
        name,
        description,
        image_user,
        image_urls,
      },
    })
  }
}
