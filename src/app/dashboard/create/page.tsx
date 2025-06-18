"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "@/components/ui/separator";
import DashboardNav from "@/components/dashboard-nav";
import { TableForm } from "@/components/table-form";
import { DialogForm } from "@/components/dialog-form";

interface FileData {
  file_name: string;
  updated_at: string;
  created_at: string;
  status: string;
}

export default function CreatePage() {
  const [files, setFiles] = useState<FileData[]>([]);

  const handleCreate = (data: { name: string; description: string }) => {
    const alreadyExists = files.some((f) => f.file_name === data.name);
    if (alreadyExists) return false;

    const now = new Date().toISOString();
    setFiles((prev) => [
      ...prev,
      {
        file_name: data.name,
        updated_at: new Date().toLocaleDateString(),
        created_at: new Date().toLocaleDateString(),
        status: "Draft",
      },
    ]);
    return true;
  };

  return (
    <>
      <DashboardNav />
      <div className="mx-6 my-4 lg:pl-[320px] lg:mx-8">
        <div className="gap-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight">Create</h1>
            <a href="https://github.com/stretc/soto" target="_blank">
              <Button variant={"outline"} className="rounded-sm">
                <GithubLogoIcon size={24} />
                Github
              </Button>
            </a>
          </div>
          <Separator className="my-[19px]" />
          <div className="p-5 items-container min-h-[800px] rounded-xs gap-5">
            <DialogForm onCreate={handleCreate} />
            <div className="">
              <TableForm files={files} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
