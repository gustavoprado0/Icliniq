import { LoginForm } from "@/app/features/auth/components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col gap-12 items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <Image 
        src="/iclinic-white.jpeg"
        alt="Logo Clínica"
        width={200} 
        height={200} 
      />
      <LoginForm />
    </div>
  );
}
