import { FC } from "react";
import { IPageBlock } from "..";

export const variants = {};

export default function Footers(props: IPageBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IPageBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
