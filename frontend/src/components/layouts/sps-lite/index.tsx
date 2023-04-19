import Simple from "./Simple";
import { FC, ReactNode } from "react";
import { ISpsLitePublicPage } from "types/pages/sps-lite";

export interface ISpsLiteLayout extends ISpsLitePublicPage {
  children: ReactNode;
}

export const variants = {
  simple: Simple,
};

export default function Layouts(props: ISpsLiteLayout) {
  const Comp = variants[
    props.layout?.variant as keyof typeof variants
  ] as FC<ISpsLiteLayout>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
