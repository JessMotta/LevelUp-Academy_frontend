import { clearToken, getToken, setToken } from "@/services/storage";
import { isTokenValid } from "@/utils/auth";
import { SessionStudent } from "@/types/types";
import { AuthResponse } from "@/types/auth";

export function getUserFn(): SessionStudent | undefined {
  const currAuth: AuthResponse = getToken();
  if (!currAuth) return undefined;

  const authIsValid = isTokenValid(currAuth.expireAt);

  if (!authIsValid) return undefined;

  return currAuth.user;
}

export async function handleUserResponse(loginAuth?: AuthResponse) {
  const currAuth: AuthResponse = getToken();

  const auth: AuthResponse = loginAuth ?? currAuth;

  if (!auth) {
    clearToken();
    throw new Error("Não foi possivel confirmar suas credenciais");
  }
  const authIsValid = isTokenValid(auth.expireAt);

  if (!authIsValid) {
    clearToken();
    throw new Error("Não foi possivel confirmar suas credenciais");
  }

  setToken(auth);

  const user = (await getUserFn()) as SessionStudent;

  return user;
}
