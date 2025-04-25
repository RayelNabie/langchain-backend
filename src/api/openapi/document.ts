import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIObject } from 'openapi3-ts/oas30';
import { registry } from '@/api/openapi/registry';

const generator = new OpenApiGeneratorV3(registry.definitions);

export const openApiDocument : OpenAPIObject = generator.generateDocument({
  openapi: '3.0.3',
  info: {
    title: 'Langchain API',
    version: '0.1.0',
    description: 'API-documentatie voor het Langchain-project',
  },
});
