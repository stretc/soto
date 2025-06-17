import { Button } from "@/components/ui/button";
import { GithubLogoIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "@/components/ui/separator";
import DashboardNav from "@/components/dashboard-nav";

export default async function SignOut() {
  return (
    <>
      <DashboardNav />
      <div className="mx-6 my-4 lg:pl-[320px] lg:mx-8">
        <div className="gap-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight">Create</h1>
            <Button variant={"outline"} className="rounded-sm">
              <GithubLogoIcon size={24} />
              Github
            </Button>
          </div>
          <Separator className="my-[19px]" />
          <div className="p-5 items-container min-h-[800px] rounded-xs bg-card gap-5">
            <div className="">
              <Button
                variant={"outline"}
                className="rounded-xs h-[100px] w-[100px]"
              >
                <PlusIcon
                  className="fill-secondary-foreground/60"
                  style={{ width: 32, height: 32 }}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
