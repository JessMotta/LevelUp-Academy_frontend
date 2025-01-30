"use client";

import { API_DOMAIN } from "@/config/constants/domain";
import { useState } from "react";

type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

export default function useAPIRequest(
  method: RequestMethods,
  path: string,
  body?: any
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const submitRequest = async () => {
    // const currAuth: AuthResponse = await getToken();
    setIsLoading(true);

    const requestParams = {
      method: method,
      body: body ? JSON.stringify(body) : "",
    };

    try {
      const res = await fetch(`${API_DOMAIN}${path}`, requestParams).then(
        (res) => res.json()
      );

      setIsLoading(false);

      return res;
    } catch (error) {
      setIsLoading(false);
      console.log("ERROR", path, error);
      setErr(true);
    }
  };

  return {
    submit: submitRequest,
    loading: isLoading,
    err: err,
  };
}
