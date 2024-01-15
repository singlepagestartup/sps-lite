import { FC } from "react";
import { ICardsProps } from "..";

export const variants = {};

export default function Startup(props: ICardsProps) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ICardsProps>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
