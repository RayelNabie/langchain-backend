import { Router } from 'express';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { analyzeController } from '@/controllers/analyseController';
import { AnalyzeRequestSchema, AnalyzeResponseSchema } from '@/api/schemas/analyse.schema';

export const analyzeRouter : Router = Router();
export const analyzeRegistry = new OpenAPIRegistry();

analyzeRegistry.registerPath({
  method: 'post',
  path: '/api/analyze',
  tags: ['Analyze'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: AnalyzeRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Prompt-analyse met scores',
      content: {
        'application/json': {
          schema: AnalyzeResponseSchema,
        },
      },
    },
  },
});

analyzeRouter.post('/analyze', async (req, res) => {
  const { prompt } = AnalyzeRequestSchema.parse(req.body);
  const result = await analyzeController(prompt);
  res.json(result);
});
