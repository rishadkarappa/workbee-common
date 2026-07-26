import { JwtPayload } from "jsonwebtoken";
import { UserRole } from "../enums/UserRole.js";

export interface IJwtPayload extends JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
}
