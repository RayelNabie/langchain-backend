import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { LangchainRequest, LangchainResponse } from './schemas';

export const registry = new OpenAPIRegistry();

registry.register('LangchainRequest', LangchainRequest);
registry.register('LangchainResponse', LangchainResponse);

registry.registerPath({
  method: 'post',
  path: '/langchain',
  summary: 'Stuur een prompt naar het LLM-model',
  request: {
    body: {
      content: {
        'application/json': {
          schema: LangchainRequest,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Het AI antwoord',
      content: {
        'application/json': {
          schema: LangchainResponse,
        },
      },
    },
  },
});
