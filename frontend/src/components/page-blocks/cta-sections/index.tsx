import { FC } from "react";
import { IButton, IMedia } from "types";
import DarkPanelWithAppScreenshot from "./DarkPanelWithAppScreenshot";
import SimpleCentered from "./SimpleCentered";

export interface ICtaSections {
  title?: string;
  description?: string;
  media?: IMedia[];
  variant: `simple-centered`;
  anchor?: string;
  buttons?: IButton[];
}

const variants = {
  "simple-centered": SimpleCentered,
  "dark-panel-with-app-screenshot": DarkPanelWithAppScreenshot,
};

export default function CtaSections(props: ICtaSections) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ICtaSections>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
