"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { signUp } from "@server/users";

const SignUpPassInput = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setUserConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // checking if passwords match or are valid
  const passwordsMatch =
    userPassword === confirmUserPassword && userPassword !== "";
  const minLength = 8;
  const isDisabled =
    userPassword.length === 0 ||
    confirmUserPassword.length === 0 ||
    !passwordsMatch ||
    userPassword.length < minLength ||
    confirmUserPassword.length < minLength ||
    !userEmail.includes("@") ||
    userEmail.length === 0 ||
    !userEmail.includes(".") ||
    userName.length <= 1;

  // handle signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch || isDisabled) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await signUp(userEmail, userPassword, userName);
      router.push("/dashboard/create");
    } catch (err) {
      console.error("Signup error: ", err);
      setError("Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={userName}
          type="name"
          placeholder="Freja"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={userEmail}
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          id="password"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-center">
          <Label htmlFor="confirm-password">Confirm Password</Label>
        </div>
        <Input
          id="confirm-password"
          type="password"
          value={confirmUserPassword}
          onChange={(e) => setUserConfirmPassword(e.target.value)}
          required
        />
        <div className="w-full">
          {!passwordsMatch && confirmUserPassword && (
            <Label className="text-destructive font-[300] text-xs">
              Passwords do not match
            </Label>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button
          type="submit"
          disabled={isDisabled}
          className="w-1/2"
          onClick={handleSignup}
        >
          {loading ? "Signing up..." : "Sign up"}
        </Button>
      </div>
    </div>
  );
};

export default SignUpPassInput;
