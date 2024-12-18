import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'

extendZodWithOpenApi(z)

export const subscriptionInput = z
  .object({
    name: z.string().openapi({ example: '1212121' }),
    externalId: z.string().openapi({ example: 'external-id-1234' }),
    autoRenew: z.boolean(),
    licenses: z.array(
      z.object({
        startDate: z.string().date(),
        endDate: z.string().date(),
        amount: z.number(),
      }),
    ),
  })
  .openapi('Subscription')

export type Subscription = z.infer<typeof subscriptionInput> & { id: number }
