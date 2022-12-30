import { Test, TestingModule } from '@nestjs/testing'

import { AuthResolver } from './auth.resolver'

describe('AuthResolver', () => {
  let resolver: AuthResolver

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver],
    }).compile()

    resolver = testingModule.get<AuthResolver>(AuthResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
