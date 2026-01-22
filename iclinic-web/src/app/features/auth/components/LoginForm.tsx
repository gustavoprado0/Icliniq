"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidator, LoginFormData } from "../validators/login.validator";
import { useLogin } from "../hooks/useLogin";
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/ui/card";
import { Label } from "../../shared/ui/label";
import { Input } from "../../shared/ui/input";
import { Button } from "../../shared/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "../../shared/context/AuthContext";
import Link from "next/link";


export function LoginForm() {
  const { mutateAsync, isPending, error } = useLogin();
  const router = useRouter();
  const { signIn } = useAuth();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidator),
  });

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await mutateAsync(data);

      signIn(response.token, response.user);

      router.push("/dashboard");
    } catch { }
  }


  return (
      <Card className="w-full max-w-md">

        <CardHeader>
          <CardTitle>Entrar no Iclinic</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div className="space-y-1">
              <Label>Email</Label>
              <Input type="email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label>Senha</Label>
              <Input type="password" {...register("password")} />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {error && (
              <p className="text-sm text-red-500">
                Email ou senha inválidos
              </p>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Entrando..." : "Entrar"}
            </Button>

            <Link className="underline" href='/register'>Registrar conta</Link>

          </form>
        </CardContent>
      </Card>
  );
}
