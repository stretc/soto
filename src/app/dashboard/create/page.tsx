import DashboardNav from "@/components/dashboard-nav";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function SignOut() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    console.log(session);
  }

  return (
    <div className="p-0 min-h-screen w-full flex justify-between">
      <DashboardNav />
    </div>
  );
}
