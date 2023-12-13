import { FC } from "react";
import { ITopbar } from "..";

export const variants = {};

export default function PublicPageTopbars(props: ITopbar) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<ITopbar>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
