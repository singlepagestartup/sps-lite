import { FC } from "react";
import { ITablesBlock } from "..";
import Simple from "./Simple";

export interface ISpsLiteTablesBlock extends ITablesBlock {}

export const variants = {
  simple: Simple,
};

export default function Tables(props: ISpsLiteTablesBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteTablesBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
