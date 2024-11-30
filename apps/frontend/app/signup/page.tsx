"use client";

import { SignUpForm } from "@/components/sign-up";
import { signInWithGithub,  signInWithDiscord } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-neutral-800/30 rounded-lg border border-neutral-700 p-8 sm:p-12 shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="text-white font-semibold text-lg">Sign Up with</div>
          <div className="flex gap-4">
            <button
              className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-600 transition"
              onClick={() => {
                signInWithGithub();
              }}
            >
              GitHub
            </button>
            <button
              className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-600 transition"
              onClick={() => {
                signInWithDiscord();
              }}
            >
              Discord
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <SignUpForm />
        </div>
        <span
          className="text-sm text-gray-400 hover:underline cursor-pointer flex items-center justify-center"
          onClick={() => {
            router.push("/signin");
          }}
        >
          Already have an account? Sign in
        </span>
      </div>
    </div>
  );
}
