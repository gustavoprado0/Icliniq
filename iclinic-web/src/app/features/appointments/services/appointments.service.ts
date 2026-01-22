import { http } from "@/app/features/shared/http";
import { Appointment } from "../types/appointment";

type CreateAppointmentDTO = {
  patientName: string;
  doctorName: string;
  specialty: string;
  date: string;
};

export const AppointmentsService = {
  list: async (): Promise<Appointment[]> => {
    const response = await http.get("/api/appointments");
    return response.data;
  },

  create: async (
    data: CreateAppointmentDTO
  ): Promise<Appointment> => {
    const response = await http.post("/api/appointments", data);
    return response.data;
  },
};
