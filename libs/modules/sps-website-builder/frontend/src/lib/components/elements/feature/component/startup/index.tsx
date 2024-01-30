import { FC } from "react";
import { IComponent } from "..";

export const variants = {};

export default function Startup(props: IComponent) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IComponent>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
