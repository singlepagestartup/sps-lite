import { FC, ReactNode } from "react";
import {
  ISpsLiteBackendNavbar,
  ISpsLiteBackendTopbar,
} from "types/collection-types/sps-lite";
import Boxed from "./Boxed";

export interface ISpsLiteNavbar extends ISpsLiteBackendNavbar {
  topbar?: ISpsLiteBackendTopbar | null;
  isLoading?: boolean;
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
