import * as z from "zod"
import { DealStatus } from "@prisma/client"

export const DealZod = z.object({
  id: z.string().uuid(),
  ticketId: z.string().uuid(),
  customerId: z.string().uuid(),
  status: z.nativeEnum(DealStatus),
  establishedAt: z.date().nullish(),
  paidAt: z.date().nullish(),
  shippedAt: z.date().nullish(),
  receivedAt: z.date().nullish(),
  closedAt: z.date().nullish(),
  rejectedAt: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
