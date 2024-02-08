import { FC } from "react";
import { Props } from "..";

export const variants = {};

export default function Startup(props: Props) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<Props>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
