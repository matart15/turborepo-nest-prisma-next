import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'

const ACCESS_TOKEN_KEY = '_admin_access_token'
type AccessToken = string
let accessToken: AccessToken = Cookies.get(ACCESS_TOKEN_KEY) || ''

export const setAccessToken: (value: AccessToken) => void = value => {
  accessToken = value
  Cookies.set(ACCESS_TOKEN_KEY, value)
}

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRQPHQL_API_ENDPOINT || 'http://localhost:4000/graphql',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...(accessToken ? { authorization: `Bearer ${accessToken}` } : {}),
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
