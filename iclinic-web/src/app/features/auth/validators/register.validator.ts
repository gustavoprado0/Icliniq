import { z } from "zod";

export const registerValidator = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres"),

  email: z
    .string()
    .email("Email inválido"),

  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres"),

  confirmPassword: z
    .string()
    .min(6, "Confirme a senha"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não conferem",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerValidator>;
