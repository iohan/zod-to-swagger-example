import Router, { Request, Response } from 'express'
import { Subscription, subscriptionInput } from './schema'
import { z } from 'zod'

const router = Router()

let subscriptions: Subscription[] = []
let idCounter = 1

router.post('/', (req: Request, res: Response) => {
  try {
    const parsedInput = subscriptionInput.parse(req.body)
    const subscription: Subscription = { id: idCounter++, ...parsedInput }
    console.log(subscription)

    subscriptions.push(subscription)
    res.status(201).json(subscription.id)
  } catch (error) {
    res.status(400).json({
      error: error instanceof z.ZodError ? error.errors : 'Invalid data',
    })
  }
})

export default router
