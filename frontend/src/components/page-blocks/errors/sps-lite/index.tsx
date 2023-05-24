import { FC } from "react";
import Simple from "./Simple";

export interface ISpsLiteErrorBlock {
  __component: "page-blocks.error-block";
  className: string | null;
  variant: "simple";
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Errors(props: ISpsLiteErrorBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteErrorBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
