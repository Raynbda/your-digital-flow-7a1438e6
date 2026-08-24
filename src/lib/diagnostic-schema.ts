import { z } from "zod";

export const submissionSchema = z.object({
  first_name: z.string().trim().max(100),
  email: z.string().trim().email().max(255),
  answers: z.record(z.string(), z.union([z.string().max(2000), z.array(z.string().max(300))])),
  scores: z.record(z.string(), z.number()),
  primary: z.string().max(40),
  secondary: z.string().max(40).nullable(),
  seriousness: z.string().max(300).optional().nullable(),
  interest: z.string().max(300).optional().nullable(),
  newsletter_opt_in: z.boolean().default(true),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;
