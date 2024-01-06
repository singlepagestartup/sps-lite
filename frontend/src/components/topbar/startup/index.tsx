import { FC } from "react";
import { ITopbar } from "..";

export const variants = {};

export default function Startup(props: ITopbar) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ITopbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
