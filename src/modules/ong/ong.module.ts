import { Module } from '@nestjs/common'
import { CreateOngController } from './controllers/create-ong.controller'
import { PrismaService } from '@/prisma/prisma.service'
import { GetAllOngController } from './controllers/get-all-ong.controller'
import { UpdateOngController } from './controllers/update-ong.controller'

@Module({
  controllers: [CreateOngController, GetAllOngController, UpdateOngController],
  providers: [PrismaService],
})
export class OngModule {}
