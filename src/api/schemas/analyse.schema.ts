import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

export const AnalyzeRequestSchema = z.object({
  prompt: z.string().min(1),
});

export const AnalyzeResponseSchema = z.object({
  prompt: z.string(),
  score: z.object({
    clarity: z.number().min(1).max(5),
    brevity: z.number().min(1).max(5),
    specificity: z.number().min(1).max(5),
  }),
  suggestion: z.string(),
  reasoning: z.string(),
});
