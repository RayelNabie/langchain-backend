import { Router } from 'express';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { handleChatStream } from '@/controllers/chatController';
import { ChatRequestSchema, ChatResponseSchema } from '@/api/schemas/chat.schema';

export const chatRouter: Router = Router();
export const chatRegistry = new OpenAPIRegistry();

chatRegistry.registerPath({
  method: 'post',
  path: '/api/chat',
  tags: ['Chat'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: ChatRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'AI-reactie',
      content: {
        'application/json': {
          schema: ChatResponseSchema,
        },
      },
    },
  },
});

chatRouter.post('/chat', handleChatStream);
