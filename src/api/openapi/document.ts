import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIObject } from 'openapi3-ts/oas30';
import { registry } from '@/api/openapi/registry';

const generator = new OpenApiGeneratorV3(registry.definitions);

export const openApiDocument : OpenAPIObject = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Langchain API',
    version: '1.0.0',
  },
});
