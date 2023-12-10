import { ISpsLiteBackendComponentNavbarBlock } from "~redux/services/backend/components/page-blocks/navbar-block/interfaces/sps-lite";
import SimpleLinksOnLeft from "./SimpleLinksOnLeft";
import { FC } from "react";

export interface ISpsLiteNavbarBlock
  extends ISpsLiteBackendComponentNavbarBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "simple-links-on-left": SimpleLinksOnLeft,
};

export default function Navbars(props: ISpsLiteNavbarBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteNavbarBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
