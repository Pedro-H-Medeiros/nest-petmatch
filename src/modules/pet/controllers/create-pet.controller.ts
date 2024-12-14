import { CurrentUser } from '@/modules/auth/current-user.decorator'
import { JwtAuthGuard } from '@/modules/auth/jwt-auth.guard'
import { UserPayload } from '@/modules/auth/jwt.stategy'
import { Role } from '@/modules/user/roles/enum/user-roles.enum'
import { Roles } from '@/modules/user/roles/roles.decorator'
import { RolesGuard } from '@/modules/user/roles/roles.guard'
import { ZodValidationPipe } from '@/pipes/zod-validation.pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { z } from 'zod'

const adoptionStatus = ['AVAILABLE', 'PENDING', 'ADOPTED'] as const

const createPetControllerBodySchema = z.object({
  ong_id: z.string().uuid().optional(),
  name: z.string(),
  age: z.string().transform((date) => new Date(date)),
  sex: z.string(),
  race: z.string(),
  type: z.string(),
  adoption_status: z.enum(adoptionStatus).default('AVAILABLE'),
  image_urls: z.array(z.string().url()),
})

type CreatePetControllerBodySchema = z.infer<
  typeof createPetControllerBodySchema
>

@Controller('pets')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
export class CreatePetController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @Roles(Role.Admin, Role.OngAdmin)
  async create(
    @CurrentUser() user: UserPayload,
    @Body(new ZodValidationPipe(createPetControllerBodySchema))
    body: CreatePetControllerBodySchema,
  ) {
    const { ong_id, name, age, sex, race, type, adoption_status, image_urls } =
      body

    const registeredUser = await this.prisma.user.findUnique({
      where: {
        id: user.sub,
      },
    })

    return await this.prisma.pet.create({
      data: {
        ong_id: ong_id ?? registeredUser.ong_id,
        name,
        age,
        sex,
        race,
        type,
        adoption_status,
        image_urls,
      },
    })
  }
}
