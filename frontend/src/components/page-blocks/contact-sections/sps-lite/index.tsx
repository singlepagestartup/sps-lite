import Centered from "./Centered";
import { FC } from "react";
import { ISpsLiteBackendContactSectonBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteContactSectonBlock
  extends ISpsLiteBackendContactSectonBlock {
  showSkeletons?: boolean;
  [key: string]: any;
}

export const variants = {
  centered: Centered,
};

export default function ContactSectons(props: ISpsLiteContactSectonBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteContactSectonBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
