import cors from 'cors';
import express from 'express';
import type { Express } from 'express';
import helmet from 'helmet';
import { logger } from '@/utils/logger';
import { env } from '@/config/envConfig';
import { errorHandlers } from '@/middleware/errorHandler';
import { rateLimiter } from '@/middleware/rateLimiter';
import { appRouter } from '@/api/routes/routes';
import { simpleTest } from '@/controllers/langchainController';
import { swaggerRouter } from '@/api/routes/swagger.routes';
import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);


const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Routes
app.use(swaggerRouter);
app.use(appRouter);

// Error handlers
app.use(...errorHandlers);
simpleTest();

export { app, logger };
