import { LoginForm } from "@/app/features/auth/components/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col gap-20 items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
            <h1 className="text-3xl">Iclinic</h1>
            <LoginForm />
        </div>
    );
}
