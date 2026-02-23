import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';

// Boom es una libreria que ayuda a darle un formato más estándar a los errores
export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const boomError = Boom.boomify(error);
  return res.status(boomError.output.statusCode).json(boomError.output.payload);
};
