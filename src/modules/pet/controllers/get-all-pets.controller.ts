import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get } from '@nestjs/common'

@Controller('pets')
export class GetAllPetsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAll() {
    return this.prisma.pet.findMany()
  }
}
