import { FC } from "react";
import { ISpsLiteBackendMenu } from "types/collection-types/sps-lite";
import Simple from "./Simple";

export interface ISpsLiteMenu extends ISpsLiteBackendMenu {}

export const variants = {
  simple: Simple,
};

export default function Menus(props: ISpsLiteMenu) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteMenu>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
