import { ISpsLiteBackendPublicPageNavbar } from "types/single-types/sps-lite";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";
import { FC } from "react";

export interface ISpsLitePublicPageNavbarBlock
  extends ISpsLiteBackendPublicPageNavbar {}

export const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
};

export default function PublicPageNavbars(
  props: ISpsLitePublicPageNavbarBlock
) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLitePublicPageNavbarBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
