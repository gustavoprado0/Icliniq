export type Appointment = {
  id: string;
  patient: string;
  doctor: string;
  specialty: string;
  status: "Disponível" | "Indisponível";
};
