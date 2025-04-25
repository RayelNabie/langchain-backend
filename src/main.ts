import { app } from '@/app';
import { startServer } from '@/server/index';
import { logger } from '@/utils/logger';

export { app, startServer, logger };

startServer();
