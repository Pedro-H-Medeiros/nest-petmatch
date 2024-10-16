import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get } from '@nestjs/common'

@Controller('instituation')
export class GetAllOngController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    return await this.prisma.ong.findMany({})
  }
}
