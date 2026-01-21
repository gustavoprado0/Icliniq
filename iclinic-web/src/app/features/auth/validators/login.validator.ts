import { z } from "zod";

export const loginValidator = z.object({
  email: z
    .string()
    .email("Email inválido"),

  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginValidator>;
