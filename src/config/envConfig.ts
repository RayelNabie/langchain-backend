import 'dotenv/config';
import { bool, cleanEnv, host, num, port, str, testOnly } from 'envalid';

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ devDefault: testOnly('test'), choices: ['development', 'production', 'test'], default:'production' }),
  HOST: host({ default: 'localhost' }),
  PORT: port({ default: 3000 }),
  CORS_ORIGIN: str({ default: 'http://localhost:*' }),
  COMMON_RATE_LIMIT_MAX_REQUESTS: num({ default: 20 }),
  COMMON_RATE_LIMIT_WINDOW_MS: num({ default: 1000 }),
  CLUSTER_ENABLED: bool({ default: true }),
  AZURE_OPENAI_API_VERSION: str(),
  AZURE_OPENAI_API_INSTANCE_NAME: str(),
  AZURE_OPENAI_API_KEY: str(),
  AZURE_OPENAI_API_DEPLOYMENT_NAME: str(),
  AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME: str(),
});
