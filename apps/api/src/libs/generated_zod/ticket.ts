import * as z from "zod"
import { TicketStatus } from "@prisma/client"

export const TicketZod = z.object({
  id: z.string(),
  sellerId: z.string(),
  eventId: z.string(),
  status: z.nativeEnum(TicketStatus),
  priceForCell: z.number().int(),
  cellsCount: z.number().int(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
