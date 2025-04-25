import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from '@/api/openapi/document';

export const swaggerRouter : Router = Router();

swaggerRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
swaggerRouter.get('/swagger.json', (_req, res) => {
  res.json(openApiDocument);
});
