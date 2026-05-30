import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  duration: z.string().min(1, "Please select how long you'll be away."),
  message: z.string().optional(),
  referral: z.string().optional(),
  website: z.string().max(0, "Bot detected"), // honeypot — must be empty
});

export type ContactFormData = z.infer<typeof contactSchema>;
