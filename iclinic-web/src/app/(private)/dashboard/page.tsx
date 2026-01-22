"use client";

import { CreateAppointmentForm } from "@/app/features/appointments/components/CreateAppointmentForm";
import { useAppointments } from "@/app/features/appointments/hooks/useAppointment";
import { useAuth } from "@/app/features/shared/context/AuthContext";


export default function DashboardPage() {
  const { user } = useAuth();
  const { appointments } = useAppointments();

  if (!user) return null;

  return (
    <>
      <p>
        Logado como: {user.name} ({user.role})
      </p>

      {user?.role === "patient" && (
        <CreateAppointmentForm />
      )}


      <h2>Consultas agendadas</h2>

      {appointments.map(appointment => (
        <div key={appointment.id}>
          <strong>Paciente:</strong> {appointment.patient}
          <br />
          <strong>Médico:</strong> {appointment.doctor}
          <br />
          <strong>Especialidade:</strong> {appointment.specialty}
          <br />
          <strong>Status:</strong> {appointment.status}
        </div>
      ))}
    </>
  );
}
