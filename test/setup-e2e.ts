import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'

const prisma = new PrismaClient()

function generateUniqueDatabaseURL(schemaId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please prvovide a DATABASE_URL environment variable.')
  }

  const databaseURL = new URL(process.env.DATABASE_URL)

  databaseURL.searchParams.set('schema', schemaId)

  return databaseURL.toString()
}

const schemaId = generateUniqueDatabaseURL(randomUUID())

beforeAll(async () => {
  process.env.DATABASE_URL = schemaId

  execSync('pnpm prisma migrate deploy')
})

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`)
  await prisma.$disconnect()
})
