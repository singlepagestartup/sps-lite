import { FC } from "react";
import { ISpsLiteBackendFooter } from "types/collection-types/sps-lite";
import Boxed from "./Boxed";

export interface ISpsLiteFooter extends ISpsLiteBackendFooter {
  showSkeletons?: boolean;
}

export const variants = {
  boxed: Boxed,
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
