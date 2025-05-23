import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to fetch users', fullError: _error }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json()
    const user = await prisma.user.create({
      data: { email, firstName, lastName }
    })
    return NextResponse.json(user)
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to create user', fullError: _error }, { status: 500 })
  }
} 