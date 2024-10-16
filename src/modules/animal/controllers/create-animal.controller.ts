import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { PrismaService } from '@/prisma/prisma.service'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AdoptionStatus } from '@prisma/client'
import { z } from 'zod'

const createAnimalControllerBodySchema = z.object({
  name: z.string(),
  age: z.string().transform((val) => new Date(val)),
  sex: z.string(),
  race: z.string(),
  color: z.string(),
  adoption_status: z.nativeEnum(AdoptionStatus).default('AVAILABLE'),
  image_urls: z.array(z.string().url()),
})

type CreateAnimalControllerBodySchema = z.infer<
  typeof createAnimalControllerBodySchema
>

@Controller('/pets')
@UseGuards(JwtAuthGuard)
export class CreateAnimalController {
  constructor(private prisma: PrismaService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createAnimalControllerBodySchema))
  async create(
    @Body() body: CreateAnimalControllerBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { name, age, sex, race, color, adoption_status, image_urls } = body

    return await this.prisma.animal.create({
      data: {
        ong_id: user.sub,
        name,
        age,
        sex,
        race,
        color,
        adoption_status,
        image_urls,
      },
    })
  }
}
