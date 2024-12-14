import { Module } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { CreatePetController } from './controllers/create-pet.controller'
import { UpdatePetController } from './controllers/update-pet.controller'
import { GetPetsController } from './controllers/get-pets.controller'
import { GetPetsByOngIdController } from './controllers/get-pets-by-ong-id.controller'

@Module({
  controllers: [
    CreatePetController,
    UpdatePetController,
    GetPetsController,
    GetPetsByOngIdController,
  ],
  providers: [PrismaService],
})
export class PetModule {}
