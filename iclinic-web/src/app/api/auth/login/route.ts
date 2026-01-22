import { NextResponse } from "next/server";

const fakeUser = {
  id: "1",
  name: "Administrador", 
  email: "teste@iclinic.com",
  password: "123456",
  role: "admin", 
};

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (
    email !== fakeUser.email ||
    password !== fakeUser.password
  ) {
    return NextResponse.json(
      { message: "Email ou senha inválidos" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    token: "fake-jwt-token",
    user: {
      id: fakeUser.id,
      name: fakeUser.name,
      email: fakeUser.email,
      role: fakeUser.role,
    },
  });
}
