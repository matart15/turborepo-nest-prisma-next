import { ProtectRoute, useAuth } from 'contexts/auth'
import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { currentUser } = useAuth()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {currentUser?.email} でログイン中
        <Link href="/events">イベント一覧</Link>
        <Link href="/users">ユーザー覧</Link>
        <Link href="/tickets">チケット一覧</Link>
        <Link href="/deals">取引一覧</Link>
      </main>
    </div>
  )
}

export default ProtectRoute(Home)
