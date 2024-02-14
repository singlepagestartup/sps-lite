"use server";
import "server-only";

import { IComponentProps as IFindOneComponentProps } from "./find-one/interface";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IFindOneComponentProps) {
  const data = await api.getPage(props);

  const Comp = variants.findOne["simple"];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} data={data} />;
}
