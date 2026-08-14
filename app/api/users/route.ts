import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET - получить всех пользователей
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST - создать нового пользователя
export async function POST(request: NextRequest) {
  const data = await request.json();
  const user = await prisma.user.create({
    data: {
      email: data.email,
    },
  });
  return NextResponse.json(user, { status: 201 });
}
