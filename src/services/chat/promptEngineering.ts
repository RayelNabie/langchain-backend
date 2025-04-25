import { ChatPromptTemplate } from '@langchain/core/prompts';
import { model } from '@/models/OpenAi';
import type { AIMessageChunk } from '@langchain/core/messages';
import type { Runnable } from '@langchain/core/runnables';

export const chatPrompt: Runnable<{ input: string }, AIMessageChunk> =
  ChatPromptTemplate.fromMessages([
    ['system','Je bent een intelligente assistent gespecialiseerd in het beantwoorden van technische prompts van studenten. Reageer beknopt maar inhoudelijk, stap voor stap.'],
    ['human', '{input}'],
  ]).pipe(model);
