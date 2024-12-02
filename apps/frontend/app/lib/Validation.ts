"use client";

import { z } from "zod";

const formSchema = z.object({
  spacename: z.string().min(2).max(50),
});

export default formSchema;