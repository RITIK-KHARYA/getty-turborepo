"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import Tiptap from "../Tiptap";
import { EditorContent } from "@tiptap/react";

const formSchema = z.object({
  spacename: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio: z.string().min(10, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spacename: "",
      bio: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen((open) => !open);
  }

  const submitvalues = () => {
    console.log(form.getValues());
  };
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen((open) => !open);
      }}
    >
      <DialogTrigger>PROFILE</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="spacename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Space Name</FormLabel>
                  <FormControl>
                    <Input placeholder="space name" {...field} />
                  </FormControl>
                  <FormDescription>This is your Space name</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field: field2 }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="space name  " {...field2} />
                  </FormControl>
                  <FormDescription>This is your Space name</FormDescription>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              onClick={() => {
                submitvalues();
              }}
            >
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
