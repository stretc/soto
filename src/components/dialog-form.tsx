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

export function DialogForm({
  onCreate,
}: {
  onCreate?: (data: { name: string; description: string }) => boolean;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control dialog open/close
  const [showError, setShowError] = useState(false); // State to control error message visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length < 1) return;

    // Call onCreate and check its return value
    const success = onCreate?.({ name, description });

    if (success) {
      setName("");
      setDescription("");
      setIsOpen(false); // Close dialog on success
      setShowError(false); // Hide error on success
    } else {
      setShowError(true); // Show error if creation failed
    }
  };

  return (
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
        <form
          onSubmit={() => {
            handleSubmit;
          }}
        >
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
  );
}
