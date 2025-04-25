import cluster from 'cluster';
import os from 'os';
import { logger } from '@/utils/logger';

const CPUs = os.cpus().length;
const RETRY_DELAY_MS = 3000;

const forkWorker = () => {
  const worker = cluster.fork();
  logger.info(`Worker ${worker?.process?.pid ?? 'unknown'} started`);
};

const handleWorkerExit = () => {
  cluster.on('exit', (worker, code, signal) => {
    logger.warn(
      `Worker ${worker.process.pid} exited (code: ${code}, signal: ${signal}). Restarting in ${RETRY_DELAY_MS / 1000}s...`
    );
    setTimeout(forkWorker, RETRY_DELAY_MS);
  });
};

export const registerCluster = () => {
  logger.info(`Master ${process.pid} running. Forking ${CPUs} workers...`);
  Array.from({ length: CPUs }).forEach(forkWorker);
  handleWorkerExit();
};
