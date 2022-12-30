import { ApolloProvider } from '@apollo/client'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { AuthProvider } from 'contexts/auth'
import apolloClient from 'lib/apollo-client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/naming-convention
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Head>
          <title>TJ GLOBAL ADMIN</title>
        </Head>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </LocalizationProvider>
    </ApolloProvider>
  )
}

export default App
