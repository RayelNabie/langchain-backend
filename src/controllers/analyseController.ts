import { analyzerPrompt } from '@/services/analyse/promptEngineering';
import { extractText } from '@/services/shared/textExtractor';

export const analyzeController = async (prompt: string) =>
  JSON.parse(extractText((await analyzerPrompt.invoke({ prompt })).content));
