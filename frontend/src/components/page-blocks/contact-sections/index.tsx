import { FC } from "react";
import { IBackendContactSectonBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IContactSectonBlock extends IBackendContactSectonBlock {}

const variants = {
  ...spsLiteVariants,
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
