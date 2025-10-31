import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email"),
  message: z
    .string()
    .max(125, "Message must be at most 125 characters")
    .optional(),

  phone: z.string().regex(/^\d{7,15}$/, "Invalid phone number"),
  countryCode: z.string().optional(),
  fullPhoneNumber: z.string().optional(),
  contactConsent: z.boolean().optional(),
});

export type UserSchemaType = z.infer<typeof userSchema>;
