import { chatRouter } from '@/api/routes/chat.routes';
import { analyzeRouter } from '@/api/routes/analyse.routes';
import { logger } from '@/utils/logger';
import { Router, Request, Response } from 'express';

export const appRouter: Router = Router();

appRouter.use('/api', chatRouter);
appRouter.use('/api', analyzeRouter);

appRouter.use((req : Request, res : Response) => {
  logger.error(`Route not found: [${req.method}] ${req.originalUrl}`);
  res.status(404).json({ ERROR: 'Route not found' });
});
