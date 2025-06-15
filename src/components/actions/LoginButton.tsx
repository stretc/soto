"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  const router = useRouter();

  const handleRouter = async () => {
    console.log("Logging in...");
    await authClient.signIn.email(
      {
        email: "soto@test.com",
        password: "password1234",
      },
      {
        onSuccess: () => {
          console.log("Signed in successfully.");
          router.push("/dashboard/create");
        },
      }
    );
  };

  return (
    <div>
      <Button className="w-full" onClick={handleRouter}>
        Login
      </Button>
    </div>
  );
}
