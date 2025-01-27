"use client";
import { useState, type ReactNode, useEffect } from "react";

import { redirect } from "next/navigation";

import { useUIContext } from "@/providers/UIProvider";
import { getToken } from "@/services/storage";
import { useSessionContext } from "@/providers/AuthProvider";

interface LayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: LayoutProps) {
  const { isLogged } = useSessionContext();
  const { loading } = useUIContext();
  const [loadingPage, setLoadingPage] = useState(true);
  const { authenticate } = useSessionContext();

  const autenticatedHandle = () => {
    const auth = getToken();

    authenticate(auth);
  };

  useEffect(() => {
    loading.on();
    autenticatedHandle();

    setTimeout(() => {
      loading.off();
      setLoadingPage(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingPage === true) {
    return <></>;
  }

  if (isLogged) return children;

  return redirect("/");
}
