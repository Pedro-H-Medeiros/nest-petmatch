import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get, UseGuards } from '@nestjs/common'

@Controller('pets')
@UseGuards(JwtAuthGuard)
export class GetAnimalController {
  constructor(private prisma: PrismaService) {}

  @Get('')
  // @UsePipes(new ZodValidationPipe())
  async getAnimal(@CurrentUser() user: UserPayload) {
    return { user }
  }
}
