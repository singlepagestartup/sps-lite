import { FC } from "react";
import { ISpsLiteBackendFooter } from "types/collection-types/sps-lite";
import Simple from "./Simple";

export interface ISpsLiteFooter extends ISpsLiteBackendFooter {}

export const variants = {
  simple: Simple,
};

export default function Footers(props: ISpsLiteFooter) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFooter>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
