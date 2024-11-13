"use client";

import { SignUpForm } from "@/components/sign-up";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="h-full">
          <div className="flex items-center justify-center">
            <SignUpForm />
          </div>
        </div>
        <span
          className="hover:underline text-sm text-muted-foreground cursor-defaults"
          onClick={() => {
            router.push("/signin");
          }}
        >
          already login in
        </span>
      </div>
    </div>
  );
}
