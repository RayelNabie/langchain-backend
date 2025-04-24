import { Router, type Request, type Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { generateOpenAPIDocument } from '@/docs/openAPIDocumentGenerator';

const openAPIDocument = generateOpenAPIDocument();
export const openAPIRouter : Router = Router();

// Serve JSON version
openAPIRouter.get('/swagger.json', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(openAPIDocument);
});

// Serve Swagger UI
openAPIRouter.use('/', swaggerUi.serve, swaggerUi.setup(openAPIDocument));
