import { AppModule } from '@/app.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Authenticate User (E2E)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    await app.init()
  })

  test('[POST] /sessions', async () => {
    await request(app.getHttpServer()).post('/accounts').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      cpf: '123.456.789-00',
      phone: '123456789',
      password: '12345678',
      image_url: 'http://example.com',
      role: 'MEMBER',
    })

    const userAuthToken = await request(app.getHttpServer())
      .post('/sessions')
      .send({
        email: 'johndoe@example.com',
        password: '12345678',
      })

    expect(userAuthToken.body).toHaveProperty('accessToken')
    expect(userAuthToken.body.accessToken).toEqual(expect.any(String))
  })
})
