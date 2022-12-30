import { EventStatus, PrismaClient, TicketStatus } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

import { EventsService } from '../src/modules/events/events.service'
import { FavoriteEventsService } from '../src/modules/favorite-events/favorite-events.service'
import { TicketsService } from '../src/modules/tickets/tickets.service'
import { UsersService } from '../src/modules/users/users.service'

const prisma = new PrismaClient()

const main = async () => {
  console.log('💫 seed executing ...')

  const prismaService = new PrismaService()
  const usersService = new UsersService(prismaService)
  const eventsService = new EventsService(prismaService)
  const ticketsService = new TicketsService(prismaService)
  const favoriteEventsService = new FavoriteEventsService(prismaService)

  // ユーザー追加
  const seller = await usersService.create({
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

  // 公演追加
  await Promise.all(
    [...Array(10)].map(async (_, i) => {
      const event = await eventsService.create({
        data: {
          name: `event_${i}`,
          status: EventStatus.ACTIVE,
          startAt: new Date(),
        },
      })

      // チケット追加
      await Promise.all(
        [...Array(3)].map(async (_, j) =>
          ticketsService.create({
            data: {
              seller: {
                connect: {
                  id: seller.id,
                },
              },
              event: {
                connect: {
                  id: event.id,
                },
              },
              status: TicketStatus.ACTIVE,
              priceForCell: 100 * (j + 1),
              cellsCount: j + 1,
              description: `event_${i} の ticket_${j}`,
            },
          }),
        ),
      )

      // イベントにお気に入り追加
      i < 5 &&
        favoriteEventsService.create({
          data: {
            userId: seller.id,
            eventId: event.id,
          },
        })
    }),
  )

  console.log('💫 seed finished.')
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
