import { ProtectRoute } from 'contexts/auth'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useUserQuery } from 'types/graphql'

const UserShow: React.FC<{
  userId: string
}> = ({ userId }) => {
  const { data: dataUserQuery } = useUserQuery({
    variables: { id: userId },
  })

  const user = dataUserQuery?.hasura?.userByPk

  if (!user) {
    return null
  }

  return (
    <>
      <p>ID：{user.id}</p>
      <p>ユーザー名：{user.email}</p>
      <p>作成日時：{user.createdAt}</p>
      <p>更新日時：{user.updatedAt}</p>
      <p>
        <Link href={`/users/${userId}/edit`}>編集する</Link>
      </p>
      <p>
        <Link href="/users/">ユーザー覧に戻る</Link>
      </p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context
  const { userId } = params as { userId: string }

  return {
    props: {
      userId,
    },
  }
}

export default ProtectRoute(UserShow)
