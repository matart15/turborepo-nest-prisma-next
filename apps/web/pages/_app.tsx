import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from 'contexts/auth'
import apolloClient from 'lib/apollo-client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/naming-convention
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>TJ GLOBAL</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default appWithTranslation(App)
