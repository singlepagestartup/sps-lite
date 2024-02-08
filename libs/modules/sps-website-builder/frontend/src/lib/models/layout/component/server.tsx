"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { headers } from "next/headers";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";
  const data = await api.getByPageUrl({ url: pathname });

  const Comp = variants[data?.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} {...data} />;
}
