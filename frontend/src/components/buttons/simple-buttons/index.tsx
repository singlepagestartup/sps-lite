import { FC } from "react";
import ClientOnlyWrapper from "~components/wrappers/client-only";
import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";
import { IBackendButton } from "types/components/elements";

export interface IButton
  extends Omit<
    IBackendButton,
    `id` | `url` | `description` | `className` | `additionalAttributes`
  > {
  url?: string | null;
  description?: string | null;
  className?: string | null;
  additionalAttributes?: any | null;
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
