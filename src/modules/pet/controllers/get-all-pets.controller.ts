import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get } from '@nestjs/common'

@Controller('pets')
export class GetAllPetsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAll() {
    const pets = await this.prisma.pet.findMany()

    return { pets }
  }
}
