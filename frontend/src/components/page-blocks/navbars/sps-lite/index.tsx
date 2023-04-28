import SimpleLinksOnLeft from "./SimpleLinksOnLeft";
import { FC } from "react";
import { ISpsLiteBackendNavbarBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteNavbarBlock extends ISpsLiteBackendNavbarBlock {
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
