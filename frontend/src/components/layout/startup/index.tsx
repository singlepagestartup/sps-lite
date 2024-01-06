import { FC } from "react";
import { ILayout } from "..";

export const variants = {};

export default function Startup(props: ILayout) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ILayout>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
