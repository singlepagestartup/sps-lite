import Simple from "./Simple";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  simple: Simple,
};

export default function SpsLite(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
