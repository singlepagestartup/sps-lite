"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "../api/server";
// import { api as productApi } from "../../product/api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.findOne({ id: props.id });

  // if (props.showAll) {
  //   const products = await productApi.find();

  //   data.products = [];
  //   if (products) {
  //     data.products = products as any;
  //   }
  // }

  const Comp = variants[props?.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} {...data} />;
}
