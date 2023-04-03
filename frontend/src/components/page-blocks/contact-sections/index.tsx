import { FC } from "react";
import SplitBrandPanel from "./SplitBrandPanel";
import { IBackendContactSectonBlock } from "types/components/page-blocks";

export interface IContactSectonBlock extends IBackendContactSectonBlock {}

const variants = {
  "split-brand-panel": SplitBrandPanel,
};

export default function ContactSectons(props: IContactSectonBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IContactSectonBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
