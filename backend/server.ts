import express from 'express'
import { PrismaClient } from '@prisma/client'

// import db from './prisma'

export class App {
    constructor(private PORT: number, private databaseUri: string) {
        this.prisma = new PrismaClient()
    }

    startServer() {
        // start express server
        const app = express()
        this.registerMiddlewares(app)
        this.registerRoutes(app)
        app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT} `)
        })
    }

    public prisma: PrismaClient

    public registerRoutes = (app: express.Application) => {
        app.get('/', (req, res) => {
            res.send('Hello world')
        })

        app.get('/users', async (req, res) => {
            const users = await this.prisma.users.findMany()
            res.json(users)
        })
    }

    registerMiddlewares = (app: express.Application) => {
        app.use(express.json())
    }
}