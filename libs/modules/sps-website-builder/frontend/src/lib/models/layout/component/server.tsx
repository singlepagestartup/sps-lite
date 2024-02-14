"use server";
import "server-only";

import {
  IComponentProps as IFindOneComponentProps,
  variants as findOneVariants,
} from "./find-one/interface";
import { headers } from "next/headers";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IFindOneComponentProps) {
  return <FindOne {...props} />;
}

async function FindOne(props: IFindOneComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";
  const data = await api.getByPageUrl({ url: pathname });

  const Comp = variants.findOne[data.variant];

  if (!Comp || !data) {
    return <>{props.children}</>;
  }

  return <Comp {...props} data={...data} />;
}
