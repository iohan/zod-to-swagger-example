import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi'
import '../routes/subscription/swagger'
import { registry } from './registry'
import * as fs from 'fs'

const getOpenApiDocumentation = () => {
  const generator = new OpenApiGeneratorV3(registry.definitions)

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Order API',
      description: 'This is the Order API using zod',
    },
    servers: [{ url: 'v1' }],
  })
}

const writeDocumentation = () => {
  const docs = getOpenApiDocumentation()

  const fileContent = JSON.stringify(docs)

  fs.writeFileSync(`openapi-docs.json`, fileContent, {
    encoding: 'utf-8',
  })
}

writeDocumentation()
