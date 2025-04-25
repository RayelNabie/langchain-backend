import { extractText } from '@/services/shared/textExtractor';
import { chatPrompt } from '@/services/chat/promptEngineering';

export const chatStreamService = async (input: string): Promise<string> => {
  let output = '';
  for await (const { content } of await chatPrompt.stream({ input })) {
    process.stdout.write((output += extractText(content)));
  }
  return output;
};
