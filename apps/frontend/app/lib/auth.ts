import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7, //will expire after the 7 days dude \
    updateAge: 60 * 60 * 24,
  },
  emailAndPassword: {
    enabled: true,
  },
  baseURL: "http://localhost:3000",
});
