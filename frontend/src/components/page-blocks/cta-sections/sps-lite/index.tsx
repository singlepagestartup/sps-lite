import DarkPanelWithAppScreenshot from "./DarkPanelWithAppScreenshot";
import { FC } from "react";
import { ISpsLiteBackendCtaSectionBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteCtaSectionsBlock
  extends ISpsLiteBackendCtaSectionBlock {
  showSkeletons?: boolean;
  [key: string]: any;
}

export const variants = {
  "dark-panel-with-app-screenshot": DarkPanelWithAppScreenshot,
};

export default function ContactSectons(props: ISpsLiteCtaSectionsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteCtaSectionsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
