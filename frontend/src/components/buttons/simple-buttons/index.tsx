import { FC } from "react";
import { IBackendButton } from "types/components";
import ClientOnlyWrapper from "~components/wrappers/client-only";
import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";

export interface IButton extends IBackendButton {
  onClick?: any;
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
    <ClientOnlyWrapper>
      <Comp {...props} />
    </ClientOnlyWrapper>
  );
}
