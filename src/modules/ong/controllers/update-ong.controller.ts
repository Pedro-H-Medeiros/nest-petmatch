import { MissingField } from '@/exceptions/missing-field.exception'
import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { PrismaService } from '@/prisma/prisma.service'
import {
  Body,
  ConflictException,
  Controller,
  Patch,
  UseGuards,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'

const updateOngControllerBodySchema = z.object({
  name: z.string().optional(),
})

type UpdateOngControllerBodySchema = z.infer<
  typeof updateOngControllerBodySchema
>

@Controller('instituation')
@UseGuards(JwtAuthGuard)
export class UpdateOngController {
  constructor(private prisma: PrismaService) {}

  @Patch()
  @UsePipes(new ZodValidationPipe(updateOngControllerBodySchema))
  async update(
    @CurrentUser() user: UserPayload,
    @Body() body: UpdateOngControllerBodySchema,
  ) {
    const { name } = body

    if (!name) {
      throw new MissingField('name')
    }

    const existingOng = await this.prisma.ong.findFirst({
      where: {
        name,
      },
    })

    if (existingOng) {
      throw new ConflictException('This ong name already exists.')
    }

    const { ong_id } = await this.prisma.user.findFirst({
      where: {
        id: user.sub,
      },
    })

    return await this.prisma.ong.update({
      where: {
        id: ong_id,
      },
      data: {
        name,
      },
    })
  }
}
