/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '@/prisma/prisma.service'
import { Controller, Get, Query } from '@nestjs/common'
import { subMonths, subYears } from 'date-fns'

@Controller('pets')
export class GetPetsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getPets(
    @Query('age') age?: string,
    @Query('sex') sex?: string,
    @Query('type') type?: string,
  ) {
    const filters: Record<string, any> = {}

    if (sex) {
      filters.sex = sex
    }

    if (type) {
      filters.type = type
    }

    if (age) {
      const ageFilter = this.getAgeFilter(age)

      if (ageFilter) {
        filters.age = ageFilter
      }
    }

    const pets = await this.prisma.pet.findMany({
      where: filters,
    })

    return { pets }
  }

  /**
   * Retorna os filtros de data baseados na idade fornecida.
   * @param age - Filtro de idade ('less_than_six_months', 'up_to_five_years', etc.)
   * @returns Objeto com condições para o campo `created_at`, ou `null` se a idade for inválida.
   */
  private getAgeFilter(age: string) {
    const now = new Date()

    switch (age) {
      case 'less_than_six_months':
        return { gte: subMonths(now, 6) }
      case 'up_to_five_years':
        return { gte: subYears(now, 5) }
      case 'up_to_ten_years':
        return { gte: subYears(now, 10) }
      case 'more_than_ten_years':
        return { lt: subYears(now, 10) }
      default:
        return null
    }
  }
}
