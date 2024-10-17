import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get, UseGuards } from '@nestjs/common'

@Controller('instituation')
@UseGuards(JwtAuthGuard)
export class GetAllOngController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    return await this.prisma.ong.findMany({})
  }
}
