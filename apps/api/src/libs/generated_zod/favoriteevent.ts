import * as z from "zod"

export const FavoriteEventZod = z.object({
  id: z.string(),
  eventId: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
