import { NextResponse } from "next/server";

let appointments = [
  {
    id: "1",
    patientName: "João Silva",
    doctorName: "Dra. Ana Costa",
    specialty: "Cardiologia",
    date: new Date().toISOString(),
    status: "Disponível",
  },
  {
    id: "2",
    patientName: "João",
    doctorName: "Dra. Gustavo Costa",
    specialty: "Neurologia",
    date: new Date().toISOString(),
    status: "Indisponível",
  },
];

export async function GET() {
  await new Promise(r => setTimeout(r, 600));

  return NextResponse.json(appointments);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newAppointment = {
    id: crypto.randomUUID(),
    ...body,
    status: "scheduled",
  };

  appointments.push(newAppointment);

  return NextResponse.json(newAppointment, { status: 201 });
}
