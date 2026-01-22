import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppointmentsService } from "../services/appointments.service";

export function useCreateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AppointmentsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["appointments"],
      });
    },
  });
}
