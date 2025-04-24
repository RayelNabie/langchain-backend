import { Router } from 'express';
import { langchainRouter } from '@/api/routes/langchain.routes';
import { logger } from '@/utils/logger';

export const appRouter : Router = Router();
appRouter.use('/api', langchainRouter);

appRouter.use((req, res) => {
  logger.error(`Route not found: [${req.method}] ${req.originalUrl}`);
  res.status(404).json({ ERROR: 'Route not found' });
});
