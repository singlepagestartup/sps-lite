import Simple from "./Simple";
import { FC } from "react";
import { ISpsLitePublicPage } from "types/pages/sps-lite";

export interface ISpsLitePublicPageLayoutBlock extends ISpsLitePublicPage {}

export const variants = {
  simple: Simple,
};

export default function PublicPageLayouts(
  props: ISpsLitePublicPageLayoutBlock
) {
  const Comp = variants[
    props.publicPageLayout?.variant as keyof typeof variants
  ] as FC<ISpsLitePublicPageLayoutBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
