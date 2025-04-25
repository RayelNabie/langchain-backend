import { AzureChatOpenAI } from '@langchain/openai';
import 'dotenv/config';
import { env } from '@/config/envConfig';

export const model = new AzureChatOpenAI({
  azureOpenAIApiKey: env.AZURE_OPENAI_API_KEY!,
  azureOpenAIApiInstanceName: env.AZURE_OPENAI_API_INSTANCE_NAME!,
  azureOpenAIApiDeploymentName: env.AZURE_OPENAI_API_DEPLOYMENT_NAME!,
  azureOpenAIApiVersion: env.AZURE_OPENAI_API_VERSION!,
  streaming: true,
});
