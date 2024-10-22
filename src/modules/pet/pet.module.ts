import { Module } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { CreatePetController } from './controllers/create-pet.controller'
import { UpdatePetController } from './controllers/update-pet.controller'

@Module({
  controllers: [CreatePetController, UpdatePetController],
  providers: [PrismaService],
})
export class PetModule {}
