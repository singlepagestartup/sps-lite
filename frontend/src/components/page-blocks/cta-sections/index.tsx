import { FC } from "react";
import { IBackendButton } from "types/components";
import { IBackendMedia } from "types/models";
import DarkPanelWithAppScreenshot from "./DarkPanelWithAppScreenshot";
import SimpleCentered from "./SimpleCentered";

export interface ICtaSectionsBlock {
  title?: string;
  description?: string;
  media?: IBackendMedia[];
  variant: keyof typeof variants;
  anchor?: string;
  buttons?: IBackendButton[];
}

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
