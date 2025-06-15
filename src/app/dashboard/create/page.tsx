"use client";
import SignOutAction from "@/components/actions/SignOutAction";

export default function SignOut() {
  return (
    <div className="min-h-screen w-full flex p-[25px] justify-between items-center">
      <h1>Create</h1>
      <SignOutAction />
    </div>
  );
}
