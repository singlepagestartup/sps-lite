import { ISpsLiteBackendTopbar } from "~redux/services/backend/models/topbar/interfaces/sps-lite";
import Boxed from "./Boxed";
import { FC } from "react";

export interface ISpsLiteTopbar extends ISpsLiteBackendTopbar {
  showSkeletons?: boolean;
  topbarRef?: any;
}

export const variants = {
  boxed: Boxed,
};

export default function PublicPageTopbars(props: ISpsLiteTopbar) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteTopbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
