import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { PrismaService } from '@/prisma/prisma.service'
import {
  Body,
  ConflictException,
  Controller,
  Patch,
  UseGuards,
} from '@nestjs/common'
import { z } from 'zod'

const updateOngControllerBodySchema = z.object({
  name: z.string(),
})

type UpdateOngControllerBodySchema = z.infer<
  typeof updateOngControllerBodySchema
>

@Controller('instituation')
@UseGuards(JwtAuthGuard)
export class UpdateOngController {
  constructor(private prisma: PrismaService) {}

  @Patch()
  // @UsePipes(new ZodValidationPipe(updateOngControllerBodySchema))
  async update(
    @CurrentUser() user: UserPayload,
    @Body() body: UpdateOngControllerBodySchema,
  ) {
    const { name } = body

    const ongExists = await this.prisma.ong.findFirst({
      where: {
        name,
      },
    })

    if (ongExists) {
      throw new ConflictException('This ong name already exists.')
    }

    const userAccount = await this.prisma.user.findUnique({
      where: {
        id: user.sub,
      },
    })

    return await this.prisma.ong.update({
      where: {
        id: userAccount.ong_id,
      },
      data: {
        name,
      },
    })
  }
}
