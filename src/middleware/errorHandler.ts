import type { ErrorRequestHandler, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const errorHandlers: [RequestHandler, ErrorRequestHandler] = [
  (_, res) => void res.sendStatus(StatusCodes.NOT_FOUND),
  (err, _, res, next) => (res.locals.err = err, next(err))
];
