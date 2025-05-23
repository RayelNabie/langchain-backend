import 'dotenv/config';
import { bool, cleanEnv, host, num, port, str, testOnly } from 'envalid';

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ devDefault: testOnly('test'), choices: ['development', 'production', 'test'] }),
  HOST: host({ devDefault: testOnly('localhost') }),
  PORT: port({ devDefault: testOnly(3000) }),
  CORS_ORIGIN: str({ devDefault: testOnly('http://localhost:3000') }),
  COMMON_RATE_LIMIT_MAX_REQUESTS: num({ devDefault: testOnly(1000) }),
  COMMON_RATE_LIMIT_WINDOW_MS: num({ devDefault: testOnly(1000) }),
  CLUSTER_ENABLED: bool({ default: false }),
  AZURE_OPENAI_API_VERSION: str(),
  AZURE_OPENAI_API_INSTANCE_NAME: str(),
  AZURE_OPENAI_API_KEY: str(),
  AZURE_OPENAI_API_DEPLOYMENT_NAME: str(),
  AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME: str(),
});
