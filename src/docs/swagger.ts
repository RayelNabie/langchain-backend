// src/api-docs/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jouw API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/**/*.ts'], // pad naar je routes of controllers
};

export const swaggerSpec = swaggerJSDoc(options);
