import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService: ConfigService<Env, true> = app.get(ConfigService)
  const PORT = configService.get('PORT', {
    infer: true,
  })

  app.useGlobalGuards(new JwtAuthGuard(new Reflector()))

  await app.listen(PORT)
}
bootstrap()
