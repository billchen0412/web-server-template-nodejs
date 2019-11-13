import { Request, Response, NextFunction } from 'express';
import * as Config from './Config';

export interface Result {
  d?: unknown;
  e?: string;
  s?: string;
}

export function ok(res: Response, data: unknown = null, httpCode = 200): void {
  const result: Result = {
    d: data,
  };
  res.status(httpCode).json(result);
}

export function error(res: Response, error: unknown, httpCode = 400): void {
  let message: string;
  let stack: string | undefined;

  if (error instanceof Error) {
    ({ message } = error);
    if (Config.isDev) {
      ({ stack } = error);
    }
  } else if (typeof error == 'string') {
    message = error;
  } else {
    message = String(error);
  }

  const result: Result = {
    e: message,
  };
  if (stack && Config.isDev) {
    result.s = stack;
  }

  res.status(httpCode).json(result);
}

export function errorHandler(err: unknown, _req: Request, res: Response, next: NextFunction): void {
  if (res.statusCode == 200) {
    error(res, err); // unexpected error
  } else {
    error(res, err, res.statusCode);
  }
  next();
}
