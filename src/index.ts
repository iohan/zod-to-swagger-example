import express, { Express } from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../openapi-docs.json'
import subscriptionRouter from './routes/subscription/subscription'
import './utils/api-docs'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/subscription', subscriptionRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
