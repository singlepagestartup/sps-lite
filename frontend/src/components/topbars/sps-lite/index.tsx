import { ISpsLiteBackendApiTopbar } from "~redux/services/backend/api/topbar/interfaces/sps-lite";
import Boxed from "./Boxed";
import { FC } from "react";

export interface ISpsLiteTopbar extends ISpsLiteBackendApiTopbar {
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
