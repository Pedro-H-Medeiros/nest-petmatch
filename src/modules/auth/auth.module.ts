import { Module } from '@nestjs/common'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Env } from '@/env'
import { JwtStrategy } from './jwt.stategy'
import { AuthenticateController } from './authenticate.controller'
import { PrismaService } from '@/prisma/prisma.service'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      global: true,
      useFactory: async (config: ConfigService<Env, true>) => {
        const privateKey = config.get('JWT_PRIVATE_KEY', { infer: true })
        const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })

        const options: JwtModuleOptions = {
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
          signOptions: {
            expiresIn: '3h',
            algorithm: 'RS256',
          },
        }
        return options
      },
    }),
  ],
  controllers: [AuthenticateController],
  providers: [JwtStrategy, PrismaService],
})
export class AuthModule {}
