import { Appointment } from "../types/appointment";

export const appointmentsMock: Appointment[] = [
  {
    id: "1",
    patient: "João Silva",
    doctor: "Dra. Ana Costa",
    specialty: "Cardiologia",
    status: "Disponível",
  },
  {
    id: "2",
    patient: "João",
    doctor: "Dra. Gustavo Costa",
    specialty: "Neurologia",
    status: "Indisponível",
  },
];
