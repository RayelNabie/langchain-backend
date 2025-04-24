import { AzureChatOpenAI } from '@langchain/openai';
import 'dotenv/config';

export const model = new AzureChatOpenAI({
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY!,
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_INSTANCE_NAME!,
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_DEPLOYMENT_NAME!,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION!,
});
