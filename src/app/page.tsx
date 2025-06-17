import { Button } from "@/components/ui/button";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start">
        <h1>Soto Home</h1>
        <a href="/login" className="w-full">
          <Button className="w-full">Login</Button>
        </a>
      </main>
    </div>
  );
}
