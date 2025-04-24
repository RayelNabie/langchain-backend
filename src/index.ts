import os from "os";
import cluster from "cluster";
import { env } from "@/config/envConfig";
import { app } from "@/server";
import { logger } from "@/utils/logger";

const CPUs = os.cpus().length;

const startServer = async () => {
  try {
    const server = app.listen(env.PORT, () => {
      const { NODE_ENV, HOST, PORT } = env;
      logger.info(`Server (${NODE_ENV}) running on http://${HOST}:${PORT}`);
    });

    const onCloseSignal = () => {
      logger.info("SIGINT/SIGTERM received, shutting down...");
      server.close(() => {
        logger.info("Server closed gracefully.");
        process.exit();
      });
      setTimeout(() => process.exit(1), 10000).unref();
    };

    process.on("SIGINT", onCloseSignal);
    process.on("SIGTERM", onCloseSignal);
  } catch (err) {
    logger.error("Server failed to start", err);
    process.exit(1);
  }
};

if (env.NODE_ENV !== "test" && env.CLUSTER_ENABLED && cluster.isPrimary) {
  logger.info(`Master ${process.pid} is running`);

  for (let i = 0; i < CPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    logger.warn(`Worker ${worker.process.pid} died, forking new one...`);
    cluster.fork();
  });
} else {
  startServer();
}
