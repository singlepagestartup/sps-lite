"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.getPage(props);

  const Comp = variants["simple"];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} {...data} />;
}
