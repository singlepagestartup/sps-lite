import { FC, ReactNode } from "react";
import Boxed from "./Boxed";
import { ISpsLiteBackendApiNavbar } from "~redux/services/backend/api/navbar/interfaces/sps-lite";
import { ISpsLiteBackendApiTopbar } from "~redux/services/backend/api/topbar/interfaces/sps-lite";

export interface ISpsLiteNavbar extends ISpsLiteBackendApiNavbar {
  topbar?: ISpsLiteBackendApiTopbar | null;
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
