import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { ChatRequestSchema, ChatResponseSchema } from '@/api/schemas/chat.schema';
import { AnalyzeRequestSchema, AnalyzeResponseSchema } from '@/api/schemas/analyse.schema';

export const registry = new OpenAPIRegistry();

// Chat
registry.register('ChatRequest', ChatRequestSchema);
registry.register('ChatResponse', ChatResponseSchema);

registry.registerPath({
  method: 'post',
  path: '/api/chat',
  tags: ['Chat'],
  request: {
    body: {
      content: {
        'application/json': { schema: ChatRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Chat response',
      content: {
        'application/json': { schema: ChatResponseSchema },
      },
    },
  },
});

// Analyze
registry.register('AnalyzeRequest', AnalyzeRequestSchema);
registry.register('AnalyzeResponse', AnalyzeResponseSchema);

registry.registerPath({
  method: 'post',
  path: '/api/analyze',
  tags: ['Analyze'],
  request: {
    body: {
      content: {
        'application/json': { schema: AnalyzeRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Analyze result',
      content: {
        'application/json': { schema: AnalyzeResponseSchema },
      },
    },
  },
});
