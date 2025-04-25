import { env } from '@/config/envConfig';
import { app } from '@/main';
import { logger } from '@/utils/logger';
import { registerCluster } from './cluster';
import { handleShutdownSignals } from './shutdown';

export const startServer = async (): Promise<void> => {
  if (env.NODE_ENV !== 'development' && env.CLUSTER_ENABLED && require('cluster').isPrimary) {
    registerCluster();
    return;
  }

  try {
    const server = app.listen(env.PORT, () => {
      logger.info(`Server (${env.NODE_ENV}) running at http://${env.HOST}:${env.PORT}`);
    });

    handleShutdownSignals(server);
  } catch (err) {
    logger.error('Server failed to start', err);
    process.exit(1);
  }
};
