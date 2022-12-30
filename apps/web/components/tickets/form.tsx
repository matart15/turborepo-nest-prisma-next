import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { useAuth } from 'contexts/auth'
import { useRouter } from 'next/router'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  EventFragment,
  TicketFragment,
  TicketInsertInput,
  useCreateTicketMutation,
  useUpdateTicketMutation,
} from 'types/graphql'
import { z } from 'zod'

type TicketInsertInputWithOutSellerAndEvent = Omit<TicketInsertInput, 'seller' | 'event' | 'deals'>

const schema = z.object({
  cellsCount: z.preprocess(v => Number(v), z.number().min(1, { message: 'Required' })),
  description: z.string().min(0, { message: 'Required' }),
  priceForCell: z.preprocess(v => Number(v), z.number().min(1, { message: 'Required' })),
  status: z.string().min(0, { message: 'Required' }),
})

const TicketForm: React.FC<{
  event: EventFragment
  ticket?: TicketFragment
}> = ({ event, ticket = null }) => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketInsertInputWithOutSellerAndEvent>({
    defaultValues: {
      status: ticket?.status,
      priceForCell: ticket?.priceForCell,
      cellsCount: ticket?.cellsCount,
      description: ticket?.description,
    },
    resolver: zodResolver(schema),
  })

  const { currentUser } = useAuth()

  const [createTicketMutation] = useCreateTicketMutation()
  const [updateTicketMutation] = useUpdateTicketMutation()

  const onSubmit: SubmitHandler<TicketInsertInputWithOutSellerAndEvent> = async (
    ticketInput: TicketInsertInputWithOutSellerAndEvent,
  ) => {
    if (ticket) {
      const { data, errors } = await updateTicketMutation({
        variables: {
          pk_columns: {
            id: ticket.id,
          },
          _set: {
            status: ticketInput.status,
            priceForCell: Number(ticketInput.priceForCell),
            cellsCount: Number(ticketInput.cellsCount),
            description: ticketInput.description,
          },
        },
      })
      if (data?.hasura?.updateTicketByPk) {
        alert('保存しました')
        router.push(`/tickets/${data.hasura.updateTicketByPk.id}`)
      }
      if (errors && errors.length > 0) {
        alert(errors[0].message)
      }
    } else {
      const { data, errors } = await createTicketMutation({
        variables: {
          object: {
            sellerId: currentUser?.id,
            eventId: event.id,
            status: ticketInput.status,
            priceForCell: Number(ticketInput.priceForCell),
            cellsCount: Number(ticketInput.cellsCount),
            description: ticketInput.description,
          },
        },
      })
      if (data?.hasura?.insertTicketOne) {
        alert('保存しました')
        router.push(`/tickets/${data.hasura.insertTicketOne.id}`)
      }
      if (errors && errors.length > 0) {
        alert(errors[0].message)
      }
    }
  }

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{ m: 2, width: '25ch' }}>
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <FormControl>
            <InputLabel id="status-select">ステータス</InputLabel>
            <Select {...field} labelId="status-select" label="ステータス">
              {/* TODO: Enum の読み込み */}
              <MenuItem value={'ACTIVE'}>Active</MenuItem>
              <MenuItem value={'DEALING'}>Dealing</MenuItem>
              <MenuItem value={'CLOSED'}>Closed</MenuItem>
              <MenuItem value={'CANCELED'}>Canceled</MenuItem>
              <MenuItem value={'DELETED'}>Deleted</MenuItem>
              <MenuItem value={'EXPIRED'}>Expired</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="priceForCell"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            label="値段"
            error={errors.priceForCell !== undefined}
            helperText={errors.priceForCell?.message}
          />
        )}
      />

      <Controller
        name="cellsCount"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            label="枚数"
            error={errors.cellsCount !== undefined}
            helperText={errors.cellsCount?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="概要"
            error={errors.description !== undefined}
            helperText={errors.description?.message}
          />
        )}
      />

      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  )
}

export default TicketForm
