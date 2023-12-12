import Simple from "./Simple";
import { IFlyout } from "..";

export const variants = {
  simple: Simple,
};

export default function Menus(props: IFlyout) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
