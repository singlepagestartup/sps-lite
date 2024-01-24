import { FC } from "react";
import { IForm } from "..";

export const variants = {};

export default function Startup(props: IForm) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IForm>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
