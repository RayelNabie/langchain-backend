import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const LangchainRequest = z.object({
  prompt: z.string().openapi({ example: 'Vertel iets over AI' }),
}).openapi('LangchainRequest');

export const LangchainResponse = z.object({
  content: z.string().openapi({ example: 'AI zegt: Hallo' }),
}).openapi('LangchainResponse');
