import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Dados inválidos" },
      { status: 400 }
    );
  }

  // Simula delay de backend
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json(
    {
      id: crypto.randomUUID(),
      name,
      email,
    },
    { status: 201 }
  );
}
