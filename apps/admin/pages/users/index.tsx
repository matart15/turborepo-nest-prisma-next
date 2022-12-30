import { Box, Button, Stack, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { ProtectRoute } from 'contexts/auth'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useUsersQuery } from 'types/graphql'

const UsersIndex: React.FC = () => {
  const { data, error, refetch } = useUsersQuery()
  const [formState, setFormState] = useState({
    email: '',
  })

  useEffect(() => {
    if (error) {
      console.error(error.message)
    }
  }, [error])

  const handleReset = () => {
    setFormState({
      email: '',
    })
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    if (e.target.name !== 'email') {
      return
    }
    setFormState({
      email: e.target.value,
    })
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      await refetch({
        where: Object.assign({}, formState.email ? { email: { _ilike: `%${formState.email}%` } } : {}),
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      ユーザー覧
      <Box>
        <Stack component="form" direction="row" spacing={2} alignItems="center" onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="email"
            variant="outlined"
            value={formState.email}
            onChange={handleChange}
            margin="dense"
          />
          <Button onClick={handleReset} type="button">
            Reset
          </Button>
          <Button variant="contained" type="submit">
            検索
          </Button>
        </Stack>
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data?.hasura?.user || []}
          columns={[
            { field: 'id', headerName: 'ID', width: 300 },
            { field: 'email', headerName: 'Email', width: 300 },
            {
              field: '',
              headerName: '',
              renderCell: props => <Link href={`/users/${props.id}/edit`}>編集する</Link>,
            },
          ]}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default ProtectRoute(UsersIndex)
