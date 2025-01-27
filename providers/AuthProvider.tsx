"use client";
import { createContext, useContext, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import storage from "@/services/storage";
import { getUserFn, handleUserResponse } from "@/services/auth";
import { SessionStudent } from "@/types/types";
import { AuthResponse } from "@/types/auth";
import { MOCK_AUTH } from "@/__mocks__/auth";
import { isTokenValid } from "@/utils/auth";

interface SessionContext {
  user?: SessionStudent;
  isLogged: boolean;
  authenticate: (token: AuthResponse) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const DEFAULT_VALUES = {
  user: getUserFn() ?? undefined,
  isLogged: storage.hasToken(),
  login: (u: string, p: string) => {},
  logout: () => {},
  authenticate: () => {},
};

const SessionContext = createContext<SessionContext>(DEFAULT_VALUES);

export const useSessionContext = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("Missing SessionContext on React three");
  }

  return context;
};

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<SessionStudent | undefined>(
    DEFAULT_VALUES.user
  );
  const router = useRouter();

  const login = async (username: string, password: string) => {
    const auth = MOCK_AUTH;
    if (!auth) return;

    await handleUserResponse(auth).then((res) => {
      setUser(res);
      router.push("/aluno");
    });
  };

  const logout = () => {
    setUser(undefined);
    storage.clearToken();
  };

  const authenticate = (auth: AuthResponse) => {
    if (user) return;
    if (auth && auth.expireAt && isTokenValid(auth.expireAt)) {
      setUser(auth.user);
      return;
    }

    handleUserResponse()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        // showToast({
        //   type: "error",
        //   message: "Não foi possivel validar suas credenciais, faça o login",
        // });
        setTimeout(() => {
          router.push("/");
        }, 3000);
      });
  };

  const isLogged = useMemo(
    () => user !== undefined && storage.hasToken(),
    [user]
  );

  const value = {
    user,
    isLogged,
    login,
    logout,
    authenticate,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
