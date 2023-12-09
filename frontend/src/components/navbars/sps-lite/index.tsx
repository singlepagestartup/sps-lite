import { FC, ReactNode } from "react";
import Boxed from "./Boxed";
import { ISpsLiteBackendNavbar } from "~redux/services/backend/models/navbar/interfaces/sps-lite";
import { ISpsLiteBackendTopbar } from "~redux/services/backend/models/topbar/interfaces/sps-lite";

export interface ISpsLiteNavbar extends ISpsLiteBackendNavbar {
  topbar?: ISpsLiteBackendTopbar | null;
  showSkeletons?: boolean;
  topbarRef: any;
}

export const variants = {
  boxed: Boxed,
};

export default function Navbars(props: ISpsLiteNavbar) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteNavbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
