import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

export const ChatRequestSchema = z.object({
  input: z.string().min(1),
});

export const ChatResponseSchema = z.object({
  output: z.string(),
});
