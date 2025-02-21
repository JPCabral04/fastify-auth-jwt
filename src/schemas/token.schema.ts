import { z } from 'zod';

export const tokenSchema = z.object({
  userId: z.string().uuid(),
  refreshToken: z.string().min(10),
  expiresAt: z.date()
})

export type TokenInput = z.infer<typeof tokenSchema>;