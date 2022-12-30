import UserForm from 'components/user/form'
import { ProtectRoute } from 'contexts/auth'
import { GetServerSideProps } from 'next'
import { useUserQuery } from 'types/graphql'

const UserEdit: React.FC<{
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
      ユーザー作成
      <UserForm user={user} />
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

export default ProtectRoute(UserEdit)
