import { FC } from "react";
import { ILoader } from "..";

export const variants = {};

export default function Startup(props: ILoader) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ILoader>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
