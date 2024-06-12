"use client";

import { BACKEND_URL } from "@sps/shared-utils";
import { useEffect } from "react";

export function Component(props: { children: React.ReactNode }) {
  useEffect(() => {
    async function setSession() {
      await fetch(`${BACKEND_URL}/api/sps-rbac/sessions`);
    }

    setSession();
  }, []);

  return <>{props.children}</>;
}
