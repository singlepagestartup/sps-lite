import { FC } from "react";
import TwoColumnsWithCenteredIntroduction from "./TwoColumnsWithCenteredIntroduction";
import { ISpsLiteBackendFaqBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteFaqBlock extends ISpsLiteBackendFaqBlock {}

export const variants = {
  "two-columns-with-centered-introduction": TwoColumnsWithCenteredIntroduction,
};

export default function Faqs(props: ISpsLiteFaqBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteFaqBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
