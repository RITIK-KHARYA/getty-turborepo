import bcrypt from "bcrypt";
import { PrismaClient } from "@repo/db/client";
import Credentials from "next-auth/providers/credentials";
import nextAuth from "next-auth";
import { signInSchema } from "./zod";

const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = nextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "devu@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials: any) => {
        const { email, password } = await signInSchema.parseAsync(credentials);
        const existingUser = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            name: credentials.name,
            password: credentials.password,
          },
        });
        if (existingUser) {
          const validatedPassword = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (!validatedPassword) {
            throw new Error("Invalid credentials.");
          }
          return {
            ...existingUser,
            id: existingUser.id.toString(),
          };
        }
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const user = await prisma.user.create({
          data: {
            email: credentials.email,
            password: hashedPassword,
          },
        });
        if (!user) {
          console.log("there you go error");
          throw new Error("Invalid credentials.");
        }
        return { ...user, id: user.id.toString() };
      },
    }),
  ],
});
