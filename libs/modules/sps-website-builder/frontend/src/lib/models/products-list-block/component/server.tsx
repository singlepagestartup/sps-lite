"use server";
import "server-only";

import {
  IComponentProps as IFindOneComponentProps,
  variants as findOneVariants,
} from "./find-one/interface";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IFindOneComponentProps) {
  for (const findOneVariant of findOneVariants) {
    if (props.variant === findOneVariant) {
      return <FindOne {...props} />;
    }
  }
}

async function FindOne(props: IFindOneComponentProps) {
  const Comp = variants.findOne[props.variant];

  const data = await api.findOne({ id: props.data.id });

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} data={data} />;
}
