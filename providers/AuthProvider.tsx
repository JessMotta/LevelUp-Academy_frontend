"use client";
import { createContext, useContext, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import storage from "@/services/storage";
import { getUserFn, handleUserResponse } from "@/services/auth";
import { APIClassroom, SessionStudent } from "@/types/types";
import { AuthResponse } from "@/types/auth";
import { isTokenValid } from "@/utils/auth";
import authenticateUser from "@/api/requests/authentication";

interface SessionContext {
  user?: SessionStudent;
  classrooms: APIClassroom[];
  isLogged: boolean;
  authenticate: (token: AuthResponse) => void;
  login: (username: string, password: string) => void;
  loading: boolean;
  logout: () => void;
}

const DEFAULT_VALUES = {
  user: getUserFn() ?? undefined,
  classrooms: [],
  isLogged: storage.hasToken(),
  login: (u: string, p: string) => {},
  logout: () => {},
  loading: false,
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
  const [loading, setLoading] = useState<boolean>(DEFAULT_VALUES.loading);
  const router = useRouter();
  const [classrooms, setClassrooms] = useState<APIClassroom[]>([]);

  const login = async (username: string, password: string) => {
    setLoading(true);
    const auth = await authenticateUser(username, password);
    if (!auth) return;

    await handleUserResponse(auth).then((res) => {
      setUser(res);
      setClassrooms(res.subjects);
      setLoading(false);
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

    setLoading(true);
    handleUserResponse()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        // showToast({
        //   type: "error",
        //   message: "Não foi possivel validar suas credenciais, faça o login",
        // });
        setTimeout(() => {
          setLoading(false);
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
    loading,
    authenticate,
    classrooms,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
