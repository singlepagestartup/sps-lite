import { FC } from "react";
import { ICardsProps } from "..";
import Simple from "./Simple";

export type ISpsLiteCatdsProps = ICardsProps;

export const variants = {
  simple: Simple,
};

export default function Cards(props: ISpsLiteCatdsProps) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<any>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
