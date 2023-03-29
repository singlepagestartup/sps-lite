import { FC } from "react";
import { IMedia } from "types";
import { IButton } from "~components/buttons/simple-buttons";
import DarkPanelWithAppScreenshot from "./DarkPanelWithAppScreenshot";
import SimpleCentered from "./SimpleCentered";

export interface ICtaSectionsBlock {
  title?: string;
  description?: string;
  media?: IMedia[];
  variant: keyof typeof variants;
  anchor?: string;
  buttons?: IButton[];
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
