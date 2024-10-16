import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get } from '@nestjs/common'

@Controller('pets')
export class GetAnimalController {
  constructor(private prisma: PrismaService) {}

  @Get('')
  // @UsePipes(new ZodValidationPipe())
  async getAnimal(@CurrentUser() user: UserPayload) {
    return { user }
  }
}
