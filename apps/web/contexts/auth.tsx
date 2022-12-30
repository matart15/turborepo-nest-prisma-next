import { setAccessToken } from 'lib/apollo-client'
import Router from 'next/router'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { CurrentUserQuery, useCurrentUserLazyQuery, useSignInUserMutation, useSignUpUserMutation } from 'types/graphql'

const AuthContext = createContext<{
  currentUser?: CurrentUserQuery['currentUser']
  loading: boolean

  signIn: (email: string, password: string) => void
  signUp: (email: string, password: string) => void
  signOut: () => void
}>({
  currentUser: undefined,
  loading: false,

  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
})

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUserLazyQuery] = useCurrentUserLazyQuery()
  const [signInUserMutation] = useSignInUserMutation()
  const [signUpUserMutation] = useSignUpUserMutation()

  const [currentUser, setCurrentUser] = useState<CurrentUserQuery['currentUser']>()
  const [loading, setLoading] = useState(true)

  const signOut = () => {
    setAccessToken('')
    setCurrentUser(undefined)
  }

  const fetchCurrentUser = useCallback(async () => {
    setLoading(true)

    try {
      const { data } = await currentUserLazyQuery()
      if (data?.currentUser) {
        setCurrentUser(data.currentUser)
      } else {
        signOut()
      }
    } finally {
      setLoading(false)
    }
  }, [currentUserLazyQuery])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    const { data, errors } = await signInUserMutation({
      variables: {
        data: {
          email,
          password,
        },
      },
    })

    if (errors && errors?.length > 0) {
      setLoading(false)
      throw errors[0]
    } else if (data) {
      const { jwtToken } = data.signInUser
      setAccessToken(jwtToken)
      await fetchCurrentUser()
    }
  }
  const signUp = async (email: string, password: string) => {
    setLoading(true)
    const { data, errors } = await signUpUserMutation({
      variables: {
        data: {
          email,
          password,
        },
      },
    })

    if (errors && errors?.length > 0) {
      setLoading(false)
      throw errors[0]
    } else if (data) {
      const signUpSuccess = data.signUpUser
      if (signUpSuccess) {
        signIn(email, password)
      }
    }
  }
  useEffect(() => {
    fetchCurrentUser()
  }, [fetchCurrentUser])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        signIn,
        signUp,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

// TODO: eslint-disable が多すぎるため、可能であれば修正する
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAuth = () => useContext(AuthContext)

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
const ProtectRoute = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  return (pageProps: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentUser, loading } = useAuth()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!currentUser && !loading) Router.push('/sign_in')
    }, [loading, currentUser])

    if (!currentUser) {
      return null
    }

    return <Component {...pageProps} />
  }
}

export { AuthProvider, ProtectRoute, useAuth }
