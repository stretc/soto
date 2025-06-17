"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  CardsIcon,
  FilePlusIcon,
  FoldersIcon,
  TornadoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Separator } from "./ui/separator";
import { Settings } from "lucide-react";
import { Link } from "./ui/Link";
import { Button } from "./ui/button";

const DashboardNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const signOut = async () => {
    router.push("/");
  };

  return (
    <div className="">
      <div className="sticky top-0 text-sm text-foreground items-center justify-between p-4 pb-0 lg:hidden">
        <Button className="bg-background hover:bg-secondary/80">
          <CardsIcon size={16} className="fill-foreground" />
        </Button>
      </div>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[320px] lg:flex-col">
        <div className="p-6 h-full rounded">
          <div className="flex h-full flex-col gap-y-4">
            <div className="ml-12 flex justify-center items-center lg:ml-0">
              <Link href="../../">
                <div className="flex justify-between items-center">
                  <TornadoIcon size={16} fill="currentColor" />
                  <span className="ml-2">Soto</span>
                </div>
              </Link>
            </div>
            <Separator orientation="horizontal" />
            <div className="grid gap-y-2">
              <Link
                href="/dashboard/create"
                variant={
                  pathname === "/dashboard/create" ? "disabled" : "default"
                }
              >
                <div className="mr-3">
                  <FilePlusIcon size={14} />
                </div>
                <span>Create</span>
              </Link>
              <Link
                href="/dashboard/settings"
                variant={
                  pathname === "/dashboard/settings" ? "disabled" : "default"
                }
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <Settings size={14} />
                  </div>
                  <span>Settings</span>
                </div>
              </Link>
              <Link
                href="/dashboard/documents"
                variant={
                  pathname === "/dashboard/documents" ? "disabled" : "default"
                }
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <FoldersIcon size={14} />
                  </div>
                  <span>Documents</span>
                </div>
              </Link>
            </div>
            <div className="flex-1"></div>
            <Separator orientation="horizontal" />
            <div className="flex justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
