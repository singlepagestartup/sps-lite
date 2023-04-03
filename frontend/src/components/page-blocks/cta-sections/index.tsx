import { FC } from "react";
import DarkPanelWithAppScreenshot from "./DarkPanelWithAppScreenshot";
import SimpleCentered from "./SimpleCentered";
import { IBackendCtaSectionBlock } from "types/components/page-blocks/sps-lite";

export interface ICtaSectionsBlock extends IBackendCtaSectionBlock {}

const variants = {
  "simple-centered": SimpleCentered,
  "dark-panel-with-app-screenshot": DarkPanelWithAppScreenshot,
};

export default function CtaSections(props: ICtaSectionsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ICtaSectionsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
