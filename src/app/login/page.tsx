import React from "react";
import { LoginForm } from "@/components/login-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  return (
    <main>
      <div className="grid min-h-svh lg:grid-cols-[3fr_8fr]">
        <div className="flex flex-col gap-4 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src="/group.jpg"
            alt="Image"
            className="inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
