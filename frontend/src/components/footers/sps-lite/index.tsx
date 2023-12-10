import { FC } from "react";
import Boxed from "./Boxed";
import { ISpsLiteBackendApiFooter } from "~redux/services/backend/api/footer/interfaces/sps-lite";

export interface ISpsLiteFooter extends ISpsLiteBackendApiFooter {
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
