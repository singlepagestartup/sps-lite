import { FC } from "react";
import Boxed from "./Boxed";
import { ISpsLiteBackendFooter } from "~redux/services/backend/models/footer/interfaces/sps-lite";

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
