import { PrismaClient } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

import { UsersService } from '../src/modules/users/users.service'

const prisma = new PrismaClient()

const main = async () => {
  console.log('💫 seed executing ...')

  const prismaService = new PrismaService()
  const usersService = new UsersService(prismaService)

  // ユーザー追加
  await usersService.create({
    data: {
      email: 'seller@example.com',
      password: '1234qwer',
    },
  })

  await usersService.create({
    data: {
      email: 'buyer@example.com',
      password: '1234qwer',
    },
  })
  console.log('💫 seed finished.')
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
