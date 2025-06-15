"use client";
import { useState } from "react";

import {
  FilePlusIcon,
  FoldersIcon,
  TornadoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Separator } from "./ui/separator";
import { Settings } from "lucide-react";
import { Link } from "./ui/Link";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";

const DashboardNav = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/create");

  const router = useRouter();
  const pathname = usePathname();

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[320px] lg:flex-col">
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
                activeLink === "/dashboard/create" ? "disabled" : "default"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("/dashboard/create");
              }}
            >
              <div className="mr-3">
                <FilePlusIcon size={14} />
              </div>
              <span>Create</span>
            </Link>
            <Link
              href="/dashboard/settings"
              variant={
                activeLink === "/dashboard/settings" ? "disabled" : "default"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("/dashboard/settings");
              }}
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
                activeLink === "/dashboard/documents" ? "disabled" : "default"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("/dashboard/documents");
              }}
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
          <div className="flex justify-center">
            <Button className="w-2/5" onClick={signOut}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
