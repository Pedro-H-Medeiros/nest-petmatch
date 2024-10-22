import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { PetModule } from './modules/pet/pet.module'
import { OngModule } from './modules/ong/ong.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    OngModule,
    PetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
