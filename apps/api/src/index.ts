import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'
import { testConnection } from './database/connection'

const app = new Hono()

// Middleware
app.use('*', cors())

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Test database connection
app.get('/db-test', async (c) => {
  const isConnected = await testConnection()
  return c.json({ database: isConnected ? 'connected' : 'disconnected' })
})

const port = process.env.PORT || 3001

serve({
  fetch: app.fetch,
  port: Number(port),
}, () => {
  console.log(`🚀 API server running on port ${port}`)
  testConnection()
})
