// "use client";

import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
} from "../ui/dialog";

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

import { Button } from "../ui/button";

interface DeletePostDialogProps {
  onClose: () => void;
  open: boolean;
}
export default function DeletePostDialog({
  onClose,
  open,
}: DeletePostDialogProps) {
  function handleopenchange(open: boolean) {}
  return (
    <Dialog open={open} onOpenChange={handleopenchange}>
      <DialogOverlay>
        <DialogContent className="bg-neutral-950 border border-neutral-700/[0.2] p-4 rounded-md flex flex-col space-y-2 cursor-pointer">
          <DialogHeader>
            <DialogTitle>
              <DialogDescription>
                Are you sure you want to delete the particular comment?
              </DialogDescription>
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button disabled={true} onClick={onClose} variant={"outline"}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
