import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { PrismaService } from '@/prisma/prisma.service'
import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common'

@Controller('pets')
@UseGuards(JwtAuthGuard)
export class GetPetsByOngIdController {
  constructor(private prisma: PrismaService) {}

  @Get(':ongId')
  async getPetByOng(
    @Param('ongId') ongId: string,
    @CurrentUser() user: UserPayload,
  ) {
    const registeredUser = await this.prisma.user.findUnique({
      where: {
        id: user.sub,
      },
    })

    if (!registeredUser) {
      throw new NotFoundException('User not found.')
    }

    return this.prisma.pet.findMany({
      where: {
        ong_id: ongId,
      },
    })
  }
}
