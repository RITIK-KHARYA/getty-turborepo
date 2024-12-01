import { ChevronDown, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Space</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-neutral-300/40 border  ">
        <DialogHeader>
          <DialogTitle>Create Space</DialogTitle>
          <DialogDescription>Enter a name for your new space</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input type="text " placeholder="Space Name " />
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <div className="relative grid grid-cols-2 items-center justify-between w-full gap-x-10 ">
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Public</SelectItem>
                    <SelectItem value="dark">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Public</SelectItem>
                    <SelectItem value="dark">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 relativ">
              <div className="flex flex-col space-y-2">
                <p className="text-xs  text-muted-foreground">Space</p>
                <hr className="w-full border-neutral-600 " />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
