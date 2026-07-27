import { UserRole } from "../enums/UserRole.js";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}