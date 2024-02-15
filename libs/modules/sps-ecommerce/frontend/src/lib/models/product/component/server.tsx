"use server";
import "server-only";

import {
  IComponentProps as IFindOneComponentProps,
  variants as findOneVariants,
} from "./find-one/interface";
import {
  IComponentProps as IFindManyComponentProps,
  variants as findManyVariants,
} from "./find-many/interface";
import { api } from "../api/server";
import { variants } from "./variants";
import { IdFromUrl } from "./IdFromUrl";
import { Default } from "./find-one/sps-lite/Default";
import { List } from "./find-many/sps-lite/List";

// default is required for dynamic import
export default async function Server(
  props: IFindOneComponentProps | IFindManyComponentProps,
) {
  const Comp = variants[props.variant];

  return <Comp {...(props as any)} />;

  // switch (props.variant) {
  //   case "default":
  //     return <Default {...props} />;
  //   case "list":
  //     return <List {...props} />;
  //   case "id-from-url":
  //     return <IdFromUrl {...props} />;
  // }

  // for (const findManyVariant of findManyVariants) {
  //   if (props.variant === findManyVariant) {
  //     return <FindMany {...props} />;
  //   }
  // }
  // for (const findOneVariant of findOneVariants) {
  //   if (props.variant === findOneVariant) {
  //     return <FindOne {...props} />;
  //   }
  // }
}

// async function FindMany(props: IFindManyComponentProps) {
//   const Comp = variants[props.variant];

//   const data = await api.findMany();

//   if (!data) {
//     return <Comp showSkeletons={true} {...props} />;
//   }

//   return <Comp {...props} data={data} />;
// }

// async function FindOne(props: IFindOneComponentProps) {
//   const Comp = variants[props.variant];

//   const data = await api.findOne({
//     id: props.data.id,
//   });

//   if (!data) {
//     return <Comp showSkeletons={true} {...props} />;
//   }

//   return <Comp {...props} data={data} />;
// }
