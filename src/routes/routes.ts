import { Router } from 'express';
import { error } from 'winston';
import { langchainRouter } from '@/routes/langchain.routes';

const appRouter : Router = Router();
appRouter.use('/api', langchainRouter);

appRouter.use((req, res) => {
  error(`Route not found: [${req.method}] ${req.originalUrl}`);
  res.status(404).json({ ERROR: 'Route not found' });
});

export default appRouter;
