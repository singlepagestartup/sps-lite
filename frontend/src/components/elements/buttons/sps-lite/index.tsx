import Text from "./Text";
import Secondary from "./Secondary";
import Primary from "./Primary";
import { FC } from "react";
import Locale from "./Locale";
import { ISpsLiteBackendButton } from "~redux/services/backend/components/elements/button/interfaces/sps-lite";

export interface ISpsLiteButton
  extends Omit<
    ISpsLiteBackendButton,
    | "id"
    | "url"
    | "description"
    | "className"
    | "additionalAttributes"
    | "__component"
    | "flyout"
  > {
  url?: string | null;
  description?: string | null;
  className?: string | null;
  additionalAttributes?: any | null;
  onClick?: any;
  __component?: ISpsLiteBackendButton["__component"];
  flyout?: ISpsLiteBackendButton["flyout"];
  children?: any;
}

export const variants = {
  text: Text,
  primary: Primary,
  secondary: Secondary,
  locale: Locale,
};

export default function Buttons(props: ISpsLiteButton) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteButton>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
