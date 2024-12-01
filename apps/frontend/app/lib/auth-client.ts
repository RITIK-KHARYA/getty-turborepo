import { createAuthClient } from "better-auth/react";

export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: "http://localhost:3002",
});

export const signInWithGithub = async () => {
  await signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
};
export const signInWithDiscord = async () => {
  await signIn.social({
    provider: "discord",
    callbackURL: "/dashboard",
  });
};
