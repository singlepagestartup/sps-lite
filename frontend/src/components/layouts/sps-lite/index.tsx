import Simple from "./Simple";
import { FC, ReactNode } from "react";
import { IBackendLayout } from "types/collection-types";

export interface ISpsLiteLayout extends IBackendLayout {
  children: ReactNode;
}

export const variants = {
  simple: Simple,
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
