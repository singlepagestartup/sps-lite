"use server";
import "server-only";

import { api } from "@sps/sps-website-builder-models-layout-frontend-api";
import { variants } from "./variants";
import { headers } from "next/headers";
import { ReactNode } from "react";

// default is required for dynamic import
export default async function Server(props: {
  isServer: boolean;
  children: ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";
  const data = await api.fetch.getByPageUrl({ url: pathname });

  const Comp = variants[data.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <>{props.children}</>;
  }

  // @ts-ignore
  return <Comp {...props} data={data} />;
}
