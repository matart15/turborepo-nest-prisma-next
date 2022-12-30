import * as z from "zod"
import { EventStatus } from "@prisma/client"

export const EventZod = z.object({
  id: z.string(),
  name: z.string(),
  startAt: z.date(),
  status: z.nativeEnum(EventStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
})
