// components/dialog-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { TableForm } from "./table-form";

export function DialogForm({
  onCreate,
}: {
  onCreate?: (data: { name: string; description: string }) => boolean;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length < 1) return;

    const success = onCreate?.({ name, description });

    if (success) {
      setName("");
      setDescription("");
      setIsOpen(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <div className="flex items-center text-secondary">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="mb-7 hover:scale-103 dark:border-ring dark:bg-transparent"
              variant={"outline"}
            >
              <PlusIcon size={16} weight="bold" className="fill-ring" />
              <p className="text-primary">New</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Create Project</DialogTitle>
                <DialogDescription>
                  Start your journey by filling in the information below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-y-3">
                  <Label htmlFor="name-1" className="mt-4">
                    Project Name<span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name-1"
                    name="name"
                    placeholder="Soto App (Limit 15 characters)"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setShowError(false);
                    }}
                    required
                    maxLength={15}
                    minLength={1}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description-1">Description</Label>
                  <Input
                    id="description-1"
                    name="description"
                    placeholder="Super Awesome App (Limit 25 characters)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={25}
                  />
                </div>
              </div>
              {showError && (
                <p className="creation-error text-sm mt-2">
                  <span className="text-primary">Creation already exists</span>
                </p>
              )}
              <DialogFooter className="mt-5">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={name.length < 1}>
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
