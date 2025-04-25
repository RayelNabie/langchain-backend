import type { MessageContent } from '@langchain/core/messages';

export const extractText = (content: MessageContent): string => {
  if (typeof content === 'string') return content;
  return content
    .filter((c): c is { type: 'text'; text: string } => c.type === 'text' && typeof c.text === 'string')
    .map(c => c.text)
    .join('');
};
