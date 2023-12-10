import { FC } from "react";
import TwoColumnsWithCenteredIntroduction from "./TwoColumnsWithCenteredIntroduction";
import { ISpsLiteBackendComponentFaqBlock } from "~redux/services/backend/components/page-blocks/faq-block/interfaces/sps-lite";

export interface ISpsLiteFaqBlock extends ISpsLiteBackendComponentFaqBlock {
  showSkeletons?: boolean;
}

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
