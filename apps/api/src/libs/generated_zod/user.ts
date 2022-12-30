import * as z from "zod"

export const UserZod = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
