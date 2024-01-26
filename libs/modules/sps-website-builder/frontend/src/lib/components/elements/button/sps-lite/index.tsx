import Default from "./Default";
import Locale from "./Locale";
import { IElement } from "..";

export const variants = {
  text: Default,
  primary: Default,
  secondary: Default,
  locale: Locale,
  destructive: Default,
  outline: Default,
  ghost: Default,
  link: Default,
};

export default function SpsLite(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
