"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registerValidator, RegisterFormData } from "../validators/register.validator";
import { useRegister } from "../hooks/useRegister";
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/ui/card";
import { Label } from "../../shared/ui/label";
import { Input } from "../../shared/ui/input";
import { Button } from "../../shared/ui/button";

export function RegisterForm() {
    const router = useRouter();
    const { mutateAsync, isPending, error } = useRegister();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerValidator),
    });

    async function onSubmit(data: RegisterFormData) {
        try {
            const { confirmPassword, ...payload } = data;

            await mutateAsync(payload);

            router.push("/login");
        } catch { }
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Criar conta no Iclinic</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <Label>Nome</Label>
                        <Input {...register("name")} />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input type="email" {...register("email")} />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <Label>Senha</Label>
                        <Input type="password" {...register("password")} />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>

                    <div>
                        <Label>Confirmar senha</Label>
                        <Input type="password" {...register("confirmPassword")} />
                        {errors.confirmPassword && (
                            <p className="text-sm text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {error && (
                        <p className="text-sm text-red-500">
                            Erro ao criar conta
                        </p>
                    )}

                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? "Criando conta..." : "Cadastrar"}
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}
