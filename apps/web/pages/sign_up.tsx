import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, TextField } from '@mui/material'
import { useAuth } from 'contexts/auth'
import { addTranslationServerSideProps } from 'lib/i18nGetStaticProps'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UserSignUpInput } from 'types/graphql'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: 'Invalid' }).min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
})

export const getServerSideProps: GetServerSideProps = addTranslationServerSideProps(async () => {
  return { props: {} }
})

const SignUp: NextPage = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignUpInput>({ resolver: zodResolver(schema) })

  const { currentUser, signUp } = useAuth()

  const onSubmit: SubmitHandler<UserSignUpInput> = async (data: UserSignUpInput) => {
    try {
      await signUp(data.email, data.password)
    } catch (e: unknown) {
      alert(e)
    }
  }

  useEffect(() => {
    if (currentUser) Router.push('/sign_up_complete')
  }, [currentUser])

  return (
    <>
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{ m: 2, width: '25ch' }}>
        <p>
          {locale === 'en' ? (
            <>EN</>
          ) : (
            <Link href="" locale="en">
              EN
            </Link>
          )}
          {' | '}
          {locale === 'ja' ? (
            <>JA</>
          ) : (
            <Link href="" locale="ja">
              JA
            </Link>
          )}
        </p>
        <p data-cy="sign-up-welcome">{t('Welcome to TJ GLOBAL!')}</p>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label={t('Email')}
              error={errors.email !== undefined}
              helperText={errors.email?.message}
              data-cy="signup-in-email-text-field"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label={t('Password')}
              error={errors.password !== undefined}
              helperText={errors.password?.message}
              data-cy="signup-in-password-text-field"
            />
          )}
        />

        <Button variant="contained" type="submit" data-cy="signup-submit">
          {t('Signup.signup')}
        </Button>
      </Stack>
    </>
  )
}

export default SignUp
