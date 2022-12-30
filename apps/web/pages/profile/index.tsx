import { Box, Card, CardContent, CardMedia, CircularProgress, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { ProtectRoute } from 'contexts/auth'
import type { NextPage } from 'next'
import { useFavoriteEventsQuery } from 'types/graphql'

const Page: NextPage = () => {
  const { data, loading, error } = useFavoriteEventsQuery()

  if (loading) return <CircularProgress />
  if (error) throw error

  return (
    <Container>
      <Typography sx={{ fontWeight: 'bold' }}>お気に入り済みのイベント一覧</Typography>
      <Stack spacing={1}>
        {data?.hasura?.favoriteEvent.map(({ id, event }) => {
          return (
            <Card key={id}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold' }}>{event.name}</Typography>
                  <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                </CardContent>
                <CardMedia component="img" sx={{ width: 150 }} image={'https://picsum.photos/300/200'} />
              </Box>
            </Card>
          )
        })}
      </Stack>
    </Container>
  )
}

export default ProtectRoute(Page)
