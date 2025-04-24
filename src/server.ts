import cors from 'cors';
import express from 'express';
import type { Express } from 'express';
import helmet from 'helmet';
import { logger } from '@/utils/logger';
import { env } from '@/config/envConfig';
import { errorHandlers } from '@/middleware/errorHandler';
import { rateLimiter } from '@/middleware/rateLimiter';

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Routes
// Nog geen routes WIP

// Error handlers
app.use(...errorHandlers);

export { app, logger };
