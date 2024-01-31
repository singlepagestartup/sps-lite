"use server";

import { ReactNode } from "react";
import { headers } from "next/headers";
import { api } from "../api/server";
import { variants } from ".";

export async function Server({ children }: { children?: ReactNode }) {
  const headersList = headers();
  const url = headersList.get("x-sps-website-builder-pathname") || "";

  const data = await api.findByPageUrl({ url });

  const Comp = variants[data.variant as keyof typeof variants];

  if (!Comp) {
    return <>{children}</>;
  }

  return <Comp {...data}>{children}</Comp>;
}
