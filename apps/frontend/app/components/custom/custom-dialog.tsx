"use client";


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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RadioDemo from "./custom-circle";
import InputDemo from "./cusotm-text";

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
            <ProfileForm />
            <div className="relative grid grid-cols-2 items-center justify-between w-full gap-x-10 ">
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Dark</SelectItem>
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
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 relative gap-x-2 ">
              <div className="flex flex-col space-y-2">
                <p className="text-xs  text-muted-foreground">Space</p>
                <hr className="w-full border-neutral-600 " />
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <p className="text-xs  text-muted-foreground">Color</p>
                  <hr className="w-full border-neutral-600 " />
                  <RadioDemo className="size-4 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <InputDemo />
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




const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
