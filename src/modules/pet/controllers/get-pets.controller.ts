/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get, Query } from '@nestjs/common'

@Controller('pets')
export class GetPetsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getPets(
    @Query('maxYears') maxYears?: string,
    @Query('maxMonths') maxMonths?: string,
    @Query('minYears') minYears?: string,
    @Query('sex') sex?: string,
    @Query('type') type?: string,
  ) {
    const filters: Record<string, any> = {}

    const now = new Date()

    if (maxYears || maxMonths) {
      const maxDate = new Date(now)
      if (maxYears)
        maxDate.setFullYear(now.getFullYear() - parseInt(maxYears, 10))
      if (maxMonths) maxDate.setMonth(now.getMonth() - parseInt(maxMonths, 10))

      filters.age = { gte: maxDate }
    }

    if (minYears) {
      const minDate = new Date(now)
      minDate.setFullYear(now.getFullYear() - parseInt(minYears, 10))

      filters.age = filters.age
        ? { ...filters.age, lt: minDate }
        : { lt: minDate }
    }

    if (sex) {
      filters.sex = sex
    }

    if (type) {
      filters.type = type
    }

    const pets = await this.prisma.pet.findMany({
      where: filters,
    })

    return { pets }
  }
}
