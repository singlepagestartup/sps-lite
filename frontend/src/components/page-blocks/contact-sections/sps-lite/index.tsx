import { ISpsLiteBackendComponentContactSectonBlock } from "~redux/services/backend/components/page-blocks/contact-section-block/interfaces/sps-lite";
import Centered from "./Centered";
import { FC } from "react";

export interface ISpsLiteContactSectonBlock
  extends ISpsLiteBackendComponentContactSectonBlock {
  showSkeletons?: boolean;
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
