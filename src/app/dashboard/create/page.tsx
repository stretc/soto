import SignOutAction from "@/components/actions/SignOutAction";
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
    <div className="min-h-screen w-full flex p-[25px] justify-between items-center">
      <h1>Create</h1>
      <SignOutAction />
    </div>
  );
}
