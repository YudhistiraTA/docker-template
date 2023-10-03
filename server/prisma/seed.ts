import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
;(async () =>
	await prisma.user.upsert({
		where: { id: 1 },
		create: { email: 'testman@mail.com' },
		update: { email: 'testman@mail.com' },
	}))().then(()=>console.log('seed success')).catch(()=>console.log('seed failed'))
