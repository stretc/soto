"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signIn } from "@server/users";

import GithubSignIn from "./GithubSignIn";

export default function LoginInput() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = async () => {
    setError("");

    if (userEmail.length === 0 || userPassword.length === 0) {
      setError("Please enter valid information.");
      return;
    }

    setIsLoading(true);
    try {
      // server action is called directly
      const response = await signIn(userEmail, userPassword);

      console.log("Signed in successfully.");
      router.push("/dashboard/create");
    } catch (err) {
      console.error("Login error: ", err);
      setError("Failed to sign in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <a
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        {error && (
          <Label className="text-destructive font-[300] text-xs">{error}</Label>
        )}
      </div>
      <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging In..." : "Login"}
      </Button>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or continue with
        </span>
      </div>
      <GithubSignIn />
    </div>
  );
}
