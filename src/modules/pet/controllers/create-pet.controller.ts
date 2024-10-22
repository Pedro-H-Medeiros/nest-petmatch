import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
<<<<<<< HEAD:src/modules/animal/controllers/create-animal.controller.ts
import { Role } from '@/modules/user/enum/user-roles.enum'
import { Roles } from '@/modules/user/roles.decorator'
=======
import { Role } from '@/modules/user/roles/enum/user-roles.enum'
import { Roles } from '@/modules/user/roles/roles.decorator'
>>>>>>> feature/routes-put-module:src/modules/pet/controllers/create-pet.controller.ts
import { PrismaService } from '@/prisma/prisma.service'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AdoptionStatus } from '@prisma/client'
import { z } from 'zod'

const createPetControllerBodySchema = z.object({
  name: z.string(),
  age: z.string().transform((val) => new Date(val)),
  sex: z.string(),
  race: z.string(),
  color: z.string(),
  adoption_status: z.nativeEnum(AdoptionStatus).default('AVAILABLE'),
  image_urls: z.array(z.string().url()),
})

type CreatePetControllerBodySchema = z.infer<
  typeof createPetControllerBodySchema
>

@Controller('/pets')
@UseGuards(JwtAuthGuard)
export class CreatePetController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @Roles(Role.Admin && Role.OngAdmin && Role.Member)
<<<<<<< HEAD:src/modules/animal/controllers/create-animal.controller.ts
  // @UsePipes(new ZodValidationPipe(createAnimalControllerBodySchema))
=======
  // @UsePipes(new ZodValidationPipe(createPetControllerBodySchema))
>>>>>>> feature/routes-put-module:src/modules/pet/controllers/create-pet.controller.ts
  async create(
    @Body() body: CreatePetControllerBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { name, age, sex, race, color, adoption_status, image_urls } = body

    return await this.prisma.pet.create({
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
