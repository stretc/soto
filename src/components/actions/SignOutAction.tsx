"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function SignOutAction() {
  const router = useRouter();

  const handleRouter = async () => {
    console.log("Signing out...");
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          console.log("Signed out successfully.");
        },
      },
    });
  };

  return (
    <div>
      <Button onClick={handleRouter}>Sign out</Button>
    </div>
  );
}
