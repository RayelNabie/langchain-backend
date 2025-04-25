import { logger } from '@/utils/logger';

export const handleShutdownSignals = (server: ReturnType<typeof import('@/main').app.listen>) => {
  const shutdown = () => {
    logger.info('Shutdown signal received.');
    server.close(() => {
      logger.info('Server closed gracefully.');
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  };

  ['SIGINT', 'SIGTERM'].forEach(signal => process.on(signal, shutdown));
};
