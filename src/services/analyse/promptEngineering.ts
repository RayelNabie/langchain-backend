import { ChatPromptTemplate } from '@langchain/core/prompts';
import { model } from '@/models/OpenAi';
import type { Runnable } from '@langchain/core/runnables';
import type { AIMessageChunk } from '@langchain/core/messages';

export const analyzerPrompt: Runnable<{ prompt: string }, AIMessageChunk> = ChatPromptTemplate
  .fromMessages([
    ['system', `Je bent een expert in prompt engineering. Beoordeel de prompt van de gebruiker op duidelijkheid, beknoptheid en specificiteit. Geef ook een verbeterde versie.
Antwoord in JSON met deze structuur:

{{
  "prompt": "...",
  "score": {{ "clarity": 1-5, "brevity": 1-5, "specificity": 1-5 }},
  "suggestion": "...",
  "reasoning": "..."
}}`],
    ['human', '{prompt}']]).pipe(model);
