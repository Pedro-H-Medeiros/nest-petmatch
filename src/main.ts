import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:5173', 'https://petmatchdev.vercel.app'],
      credentials: true,
    },
  })
  app.use(cookieParser())

  const configService: ConfigService<Env, true> = app.get(ConfigService)
  const PORT = configService.get('PORT', {
    infer: true,
  })

  await app.listen(PORT)
}
bootstrap()
