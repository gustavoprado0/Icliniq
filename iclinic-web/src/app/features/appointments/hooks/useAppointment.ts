"use client";

import { useAuth } from "../../shared/context/AuthContext";
import { appointmentsMock } from "../mocks/appointments.mock";
import { Appointment } from "../types/appointment";

export function useAppointments() {
  const { user } = useAuth();

  function getVisibleAppointments(): Appointment[] {
    if (!user) return [];

    if (user.role === "admin") {
      return appointmentsMock;
    }

    if (user.role === "doctor") {
      return appointmentsMock.filter(
        appointment => appointment.doctor === user.name
      );
    }

    if (user.role === "patient") {
      return appointmentsMock.filter(
        appointment => appointment.patient === user.name
      );
    }

    return [];
  }

  return {
    appointments: getVisibleAppointments(),
  };
}
