import { Test, TestingModule } from '@nestjs/testing'

import { UsersService } from './users.service'

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile()

    service = testingModule.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
