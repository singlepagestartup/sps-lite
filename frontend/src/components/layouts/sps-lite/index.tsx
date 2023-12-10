import Wide from "./Wide";
import { FC, ReactNode } from "react";
import Boxed from "./Boxed";
import { ISpsLiteBackendApiLayout } from "~redux/services/backend/api/layout/interfaces/sps-lite";
import { ISpsLiteBackendApiLoader } from "~redux/services/backend/api/loader/interfaces/sps-lite";

export interface ISpsLiteLayout extends ISpsLiteBackendApiLayout {
  children: ReactNode;
  loader?: ISpsLiteBackendApiLoader | null;
}

export const variants = {
  wide: Wide,
  boxed: Boxed,
};

export default function Layouts(props: ISpsLiteLayout) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteLayout>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
