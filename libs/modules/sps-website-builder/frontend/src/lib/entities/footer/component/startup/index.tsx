import { FC } from "react";
import { IFooter } from "..";

export const variants = {};

export default function Startup(props: IFooter) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IFooter>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
