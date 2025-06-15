"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

const SignUpPassInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword && password !== "";
  const minLength = 8;
  const isDisabled =
    password.length === 0 ||
    confirmPassword.length === 0 ||
    !passwordsMatch ||
    password.length < minLength ||
    confirmPassword.length < minLength ||
    !email.includes("@") ||
    email.length === 0 ||
    !email.includes(".");

  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={email}
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="w-full">
          {!passwordsMatch && confirmPassword && (
            <Label className="text-destructive font-[300] text-xs">
              Passwords do not match
            </Label>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button type="submit" disabled={isDisabled} className="w-1/2">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SignUpPassInput;
