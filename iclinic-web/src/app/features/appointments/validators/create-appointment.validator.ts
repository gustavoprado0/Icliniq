import { z } from "zod";

export const createAppointmentSchema = z.object({
  patientName: z.string().min(3, "Nome obrigatório"),
  doctorName: z.string().min(3, "Selecione um médico"),
  specialty: z.string().min(3, "Selecione a especialidade"),
  date: z.string().min(1, "Data obrigatória"),
});

export type CreateAppointmentFormData = z.infer<
  typeof createAppointmentSchema
>;
