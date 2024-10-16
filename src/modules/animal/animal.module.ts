import { Module } from '@nestjs/common'
import { CreateAnimalController } from './controllers/create-animal.controller'
import { GetAnimalController } from './controllers/get-animal.controller'
import { PrismaService } from '@/prisma/prisma.service'

@Module({
  controllers: [CreateAnimalController, GetAnimalController],
  providers: [PrismaService],
})
export class AnimalModule {}
