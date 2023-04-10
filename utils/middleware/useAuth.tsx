"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface AuthUser {
  token: string | null;
  name: string | null;
}

export function useAuth(): AuthUser {
  const router = useRouter();

  const [authData, setAuthUser] = useState<AuthUser>({
    token: null,
    name: null,
  });

  const goTo = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  useEffect(() => {
    const token = window.localStorage.getItem("token_authorizarion");
    const name = window.localStorage.getItem("user_name");

    if (token) {
      setAuthUser({ token, name });
      goTo("/dashboard");
    } else goTo("/");
  }, []);

  return authData;
}
