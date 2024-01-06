import Text from "./Text";
import Secondary from "./Secondary";
import Primary from "./Primary";
import Locale from "./Locale";
import { IElement } from "..";

export const variants = {
  text: Text,
  primary: Primary,
  secondary: Secondary,
  locale: Locale,
};

export default function SpsLite(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
