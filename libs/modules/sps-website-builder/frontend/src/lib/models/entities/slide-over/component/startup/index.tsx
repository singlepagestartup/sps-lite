import { FC } from "react";
import { ISlideOver } from "..";

export const variants = {};

export default function Startup(props: ISlideOver) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISlideOver>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
