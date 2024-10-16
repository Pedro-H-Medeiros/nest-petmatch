import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { Body, Controller, Patch, UseGuards, UsePipes } from '@nestjs/common'
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
  @UsePipes(new ZodValidationPipe(updateOngControllerBodySchema))
  async update(
    @CurrentUser() user: UserPayload,
    @Body() body: UpdateOngControllerBodySchema,
  ) {
    const { name } = body

    await this.prisma.ong.update({
      where: {
        id: user.sub,
      },
      data: {
        name,
      },
    })
  }
}
