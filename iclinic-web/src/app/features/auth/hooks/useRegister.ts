import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth.service";

export function useRegister() {
  return useMutation({
    mutationFn: AuthService.register,
  });
}
