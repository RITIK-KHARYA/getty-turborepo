import z from "zod";
export const MailSchema =  z.object({ email: z.string().email() });

