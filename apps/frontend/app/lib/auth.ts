import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@repo/db";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }) as any,
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, 
    updateAge: 60 * 60 * 24,
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn:true

  },
  baseURL: "http://localhost:3000",
  
});
