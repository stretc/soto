import { cn } from "@/lib/utils";
import LoginInput from "./actions/LoginInput";
import ModeToggle from "./ui/theme";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <div className="flex justify-center">
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center text-center">
          <div className="flex">
            <h1 className="text-2xl font-bold">Login to your account</h1>
          </div>

          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <LoginInput />
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </form>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
}
