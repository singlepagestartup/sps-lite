import { FC } from "react";
import { ICardsProps } from "..";

export const variants = {};

export default function Cards(props: ICardsProps) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ICardsProps>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
