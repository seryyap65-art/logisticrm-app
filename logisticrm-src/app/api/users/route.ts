import { NextRequest, NextResponse } from 'next/server';

// GET - получить всех пользователей
export async function GET() {
  // Временно возвращаем тестовые данные
  return NextResponse.json([
    { id: '1', email: 'test@example.com', createdAt: new Date().toISOString() }
  ]);
}

// POST - создать нового пользователя
export async function POST(request: NextRequest) {
  const data = await request.json();
  // Временно возвращаем тестовые данные
  return NextResponse.json({
    id: crypto.randomUUID(),
    email: data.email,
    createdAt: new Date().toISOString()
  }, { status: 201 });
}
