require('module-alias/register')
import express, { Express, Request, Response } from 'express'
import { prisma } from '@/utils'
import cors from 'cors'

const app: Express = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || 'localhost'
app.use(cors());
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
	const data = await prisma.user.findMany()
	res.status(200).json(data)
})

app.listen(+port, hostname, () => {
	console.log(`⚡️[server]: Server is running at http://${hostname}:${port}`)
})
