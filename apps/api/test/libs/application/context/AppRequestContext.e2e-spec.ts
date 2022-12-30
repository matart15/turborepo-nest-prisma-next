import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '@src/app.module'
import * as request from 'supertest'

describe('AppRequestContext (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  // TODO: この辺は自分の動作確認のためにいったんセット
  it('リクエストコンテキストにRequetIdがセットされていること', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .set({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiMTFmMjQ3ODUtOTk4Yy00MzA4LTg3YmUtZjEyNTJlYWUzNGE2IiwieC1oYXN1cmEtcm9sZSI6InVzZXIifSwic3ViIjoiMTFmMjQ3ODUtOTk4Yy00MzA4LTg3YmUtZjEyNTJlYWUzNGE2IiwiaWF0IjoxNjY4MzA0ODg2LjkwMSwiZXhwIjoxNjcwODk2ODg2fQ.7x9P1ZpRZIuvd_pOy0qZlJ2R2Jo9cSaPEcUjIEHeSOg',
      })
      .send({
        query: 'mutation{ initializeDeal(ticketId: "3cd8a138-44af-46a3-9af6-31bb3c1a807a") { id }}',
      })
      .expect(200)
      .expect(res => {
        expect(res.body.errors[0].extensions.response.correlationId.length).toBe(6)
        expect(res.body.errors[0].extensions.response.message).toBe('Not Found')
      })
  })
})
