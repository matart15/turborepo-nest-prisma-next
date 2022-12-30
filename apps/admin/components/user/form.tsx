import { Button, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UserFragment, UserSignInInput, useUpdateUserMutation } from 'types/graphql'

type FormInput = Omit<UserSignInInput, 'password'>

const EventForm: React.FC<{
  user?: UserFragment
}> = ({ user = null }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      email: user?.email,
    },
  })

  const router = useRouter()
  const [updateUserMutation] = useUpdateUserMutation()

  const onSubmit: SubmitHandler<FormInput> = async (userInput: FormInput) => {
    if (user) {
      console.log(userInput)
      const { data, errors } = await updateUserMutation({
        variables: {
          pk_columns: {
            id: user.id,
          },
          _set: {
            email: userInput.email,
          },
        },
      })
      if (data?.hasura?.updateUserByPk) {
        alert('保存しました')
        router.push(`/users/${user.id}`)
      }
      if (errors && errors.length > 0) {
        alert(errors[0].message)
      }
    }
  }

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{ m: 2, width: '25ch' }}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="公演名"
            error={errors.email !== undefined}
            helperText={<>{errors.email?.message}</>}
          />
        )}
      />

      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  )
}

export default EventForm
