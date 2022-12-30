import * as z from "zod"
import { StripePaymentStatus } from "@prisma/client"

export const StripePaymentZod = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  stripeCustomerId: z.string(),
  stripePaymentMethodId: z.string(),
  status: z.nativeEnum(StripePaymentStatus),
  fingerprint: z.string().nullish(),
  funding: z.string(),
  country: z.string(),
  currency: z.string(),
  brand: z.string(),
  expMonth: z.string(),
  expYear: z.string(),
  last4: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
