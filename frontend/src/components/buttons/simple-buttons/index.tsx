import { FC } from "react";
import { IMedia } from "types";
import ClientOnly from "~components/wrappers/client-only";
import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";

export interface IButton {
  title: string;
  url?: string;
  onClick?: any;
  description?: string;
  icon?: IMedia;
  variant: keyof typeof variants;
  className?: string;
  additionalAttributes?: any;
}

const variants = {
  "bottom-line": BottomLine,
  primary: Primary,
  default: Default,
};

export default function SimpleButtons(props: IButton) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IButton>;

  if (!Comp) {
    return <></>;
  }

  return (
    <ClientOnly>
      <Comp {...props} />
    </ClientOnly>
  );
}
