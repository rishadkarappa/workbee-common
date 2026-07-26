import { IJwtPayload } from "./IJwtPayload.js";

declare global {
  namespace Express {
    interface Request {
      user?: IJwtPayload;
    }
  }
}

export {};