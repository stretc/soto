import { SignUpForm } from "@/components/signup-form";

const page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </main>
  );
};

export default page;
