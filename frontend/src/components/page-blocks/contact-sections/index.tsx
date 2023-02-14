import { FC } from "react";
import { IContactSecton } from "types";
import SplitBrandPanel from "./SplitBrandPanel";

const variants = {
  "split-brand-panel": SplitBrandPanel,
};

export default function ContactSectons(props: IContactSecton) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IContactSecton>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
