import { SessionStudent } from "./types";

export type AuthResponse = {
  token: string;
  expireAt: string;
  user: SessionStudent;
};
