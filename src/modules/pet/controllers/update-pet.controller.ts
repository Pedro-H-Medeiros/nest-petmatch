import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'

import { PrismaService } from '@/prisma/prisma.service'
import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common'
import { z } from 'zod'

const adoptionStatus = ['AVAILABLE', 'PENDING', 'ADOPTED'] as const

const updatePetControllerBodySchema = z.object({
  ong_id: z.string().uuid().optional(),
  name: z.string().optional(),
  age: z
    .string()
    .transform((date) => new Date(date))
    .optional(),
  sex: z.string().optional(),
  race: z.string().optional(),
  color: z.string().optional(),
  adoption_status: z.enum(adoptionStatus).optional(),
  image_urls: z.array(z.string().url()).optional(),
})

type UpdatePetControllerBodySchema = z.infer<
  typeof updatePetControllerBodySchema
>

@Controller('pets')
@UseGuards(JwtAuthGuard)
export class UpdatePetController {
  constructor(private prisma: PrismaService) {}

  @Put(':petId')
  async update(
    @Param('petId') petId: string,
    @CurrentUser() user: UserPayload,
    @Body(new ZodValidationPipe(updatePetControllerBodySchema))
    body: UpdatePetControllerBodySchema,
  ) {
    const { ong_id, name, age, sex, race, color, adoption_status, image_urls } =
      body

    const pet = await this.prisma.pet.findFirst({
      where: {
        id: petId,
      },
    })

    if (!pet) {
      throw new NotFoundException('Pet not found.')
    }

    const registeredUser = await this.prisma.user.findUnique({
      where: {
        id: user.sub,
      },
    })

    if (!registeredUser) {
      throw new NotFoundException('User not found.')
    }

    if (ong_id !== registeredUser.ong_id || ong_id !== pet.ong_id) {
      throw new NotFoundException('You do not have access to this pet.')
    }

    const ongExists = await this.prisma.ong.findUnique({
      where: { id: ong_id },
    })

    if (ong_id && !ongExists) {
      throw new NotFoundException('Provided ONG not found.')
    }

    try {
      return await this.prisma.pet.update({
        where: {
          id: pet.id,
        },
        data: {
          ong_id: ong_id || pet.ong_id,
          name,
          age,
          sex,
          race,
          color,
          adoption_status,
          image_urls,
        },
      })
    } catch (error) {
      throw new NotFoundException('Failed to update the pet.')
    }
  }
}
