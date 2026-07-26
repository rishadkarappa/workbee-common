import { IJwtPayload } from "./IJwtPayload.ts";

declare global {
  namespace Express {
    interface Request {
      user?: IJwtPayload;
    }
  }
}

export {};