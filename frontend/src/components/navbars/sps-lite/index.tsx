import { FC } from "react";
import {
  ISpsLiteBackendNavbar,
  ISpsLiteBackendTopbar,
} from "types/collection-types/sps-lite";
import Simple from "./Simple";

export interface ISpsLiteNavbar extends ISpsLiteBackendNavbar {
  topbar?: ISpsLiteBackendTopbar | null;
}

export const variants = {
  simple: Simple,
};

export default function PublicPageNavbars(props: ISpsLiteNavbar) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteNavbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
