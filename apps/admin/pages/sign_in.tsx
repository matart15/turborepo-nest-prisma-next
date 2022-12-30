import { Button, Stack, TextField } from '@mui/material'
import { useAuth } from 'contexts/auth'
import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UserSignInInput } from 'types/graphql'

const SignIn: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignInInput>({})

  const { currentUser, signIn } = useAuth()

  const onSubmit: SubmitHandler<UserSignInInput> = async (data: UserSignInInput) => {
    try {
      await signIn(data.email, data.password)
    } catch (e: unknown) {
      alert(e)
    }
  }

  useEffect(() => {
    if (currentUser) Router.push('/')
  }, [currentUser])

  return (
    <>
      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{ m: 2, width: '25ch' }}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'メールアドレスを入力してください',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="メールアドレス"
              error={errors.email !== undefined}
              helperText={<>{errors.email?.message}</>}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'パスワードを入力してください',
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="パスワード"
              error={errors.password !== undefined}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button variant="contained" type="submit">
          送信する
        </Button>
      </Stack>
    </>
  )
}

export default SignIn
