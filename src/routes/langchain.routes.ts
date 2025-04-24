import { Router } from 'express';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

export const userRegistry = new OpenAPIRegistry();
export const langchainRouter : Router = Router();

langchainRouter.use((req, res, next) => {
  next();
});

langchainRouter
  .route('/langchain')
  .get((req, res, next) => {
    next();
  })
  .post((req, res, next) => {
    next();
  });
