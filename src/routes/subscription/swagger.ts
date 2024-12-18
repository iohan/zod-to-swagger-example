import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { registry } from '../../utils/registry'
import { subscriptionInput } from './schema'
import { z } from 'zod'

extendZodWithOpenApi(z)

registry.registerPath({
  method: 'post',
  path: '/subscription',
  description: 'Add a new subscription',
  summary: 'Add a new subscription',
  request: {
    body: {
      description: 'Object with user data.',
      content: {
        'application/json': {
          schema: subscriptionInput,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Operation Successful',
      content: {
        'application/json': {
          schema: z.object({
            subscriptionId: z.number().openapi({ example: 12345 }),
          }),
        },
      },
    },
    400: {
      description: 'Error: Invalid data',
    },
  },
})
