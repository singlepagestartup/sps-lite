"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server<T>(props: IComponentProps<T>) {
  let id: number | undefined;
  let variant = props.variant;

  if (props.variant === "list") {
    const data = await api.find();
    id = data[0]?.id;
    variant = "default";
  } else {
    id = props.id;
  }

  if (!id) {
    return <></>;
  }

  const data = await api.findOne({ id });

  const Comp = variants[props?.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} {...(data as any)} />;
}
