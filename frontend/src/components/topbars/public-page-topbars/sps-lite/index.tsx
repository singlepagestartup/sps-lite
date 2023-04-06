import { ISpsLiteBackendPublicPageTopbar } from "types/single-types/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLitePublicPageTopbarBlock
  extends ISpsLiteBackendPublicPageTopbar {}

export const variants = {
  simple: Simple,
};

export default function PublicPageTopbars(
  props: ISpsLitePublicPageTopbarBlock
) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLitePublicPageTopbarBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
