import { ProtectRoute, useAuth } from 'contexts/auth'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useDealsQuery } from 'types/graphql'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { currentUser } = useAuth()
  const { data } = useDealsQuery({
    variables: {
      where: {
        _or: [
          {
            customerId: {
              _eq: currentUser?.id,
            },
          },
          {
            ticket: {
              sellerId: {
                _eq: currentUser?.id,
              },
            },
          },
        ],
      },
    },
  })
  const deals = data?.hasura?.deal || []

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <span data-cy="text-current-user-email">{currentUser?.email}</span> でログイン中
        <Link href="/tickets">チケット一覧</Link>
        <Link href="/events">
          <a data-cy="event-list-link">イベント一覧</a>
        </Link>
        <Link href="/profile">お気に入り一覧</Link>
        <Link href="/payments">お支払い方法</Link>
        <h3>取引</h3>
        {deals.length === 0 && '取引はありません'}
        {deals.length > 0 &&
          deals.map(deal => (
            <Link key={deal.id} href={`/deals/${deal.id}/`}>
              <a>取引_{deal.id}</a>
            </Link>
          ))}
      </main>
    </div>
  )
}

export default ProtectRoute(Home)
