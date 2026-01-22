"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createAppointmentSchema,
  CreateAppointmentFormData,
} from "../validators/create-appointment.validator";
import { useCreateAppointment } from "../hooks/useCreateAppointments";

export function CreateAppointmentForm() {
  const { mutateAsync, isPending } = useCreateAppointment();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateAppointmentFormData>({
    resolver: zodResolver(createAppointmentSchema),
  });

  async function onSubmit(data: CreateAppointmentFormData) {
    await mutateAsync(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-md border p-4"
    >
      <h2 className="font-semibold">Agendar consulta</h2>

      <div>
        <input
          placeholder="Nome do paciente"
          {...register("patientName")}
          className="w-full rounded border p-2"
        />
        {errors.patientName && (
          <p className="text-sm text-red-500">
            {errors.patientName.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="Nome do médico"
          {...register("doctorName")}
          className="w-full rounded border p-2"
        />
        {errors.doctorName && (
          <p className="text-sm text-red-500">
            {errors.doctorName.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="Especialidade"
          {...register("specialty")}
          className="w-full rounded border p-2"
        />
        {errors.specialty && (
          <p className="text-sm text-red-500">
            {errors.specialty.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="datetime-local"
          {...register("date")}
          className="w-full rounded border p-2"
        />
        {errors.date && (
          <p className="text-sm text-red-500">
            {errors.date.message}
          </p>
        )}
      </div>

      <button
        disabled={isPending}
        className="w-full rounded bg-blue-600 p-2 text-white"
      >
        {isPending ? "Agendando..." : "Agendar"}
      </button>
    </form>
  );
}
