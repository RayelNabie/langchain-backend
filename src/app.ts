import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

import { env } from '@/config/envConfig';
import { errorHandlers } from '@/middleware/errorHandler';
import { rateLimiter } from '@/middleware/rateLimiter';
import { appRouter } from '@/api/routes/routes';
import { swaggerRouter } from '@/api/routes/swagger.routes';

extendZodWithOpenApi(z);

export const app: Express = express();

// Middleware
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

