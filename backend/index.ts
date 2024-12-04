import dotenv from 'dotenv'
import { App } from './server'

// instantiate all environment variables
dotenv.config()

const server = new App(Number(process.env.PORT) || 3000, process.env.DATABASE_URL || '')

server.startServer()
