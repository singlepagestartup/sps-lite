"use server";
import "server-only";

import { IComponentProps as IFindOneComponentProps } from "./find-one/interface";
import { IComponentProps as IFindManyComponentProps } from "./find-many/interface";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(
  props: IFindOneComponentProps | IFindManyComponentProps,
) {
  if (props.variant === "list") {
    return <></>;
  }

  const data = await api.findOne({ id: props.data.id });

  const Comp = variants.findOne[props?.variant];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} data={data} />;
}
