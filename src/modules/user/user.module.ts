import { Module } from '@nestjs/common'
import { CreateUserController } from './controllers/create-user.controller'
import { AuthenticateController } from './controllers/authenticate.controller'

@Module({
  controllers: [CreateUserController, AuthenticateController],
})
export class UserModule {}
