import { IComponentProps, IComponentPropsExtended } from "..";
import SimpleCentered from "./SimpleCentered";

export const variants = {
  "simple-centered": SimpleCentered,
};

export default function SpsLite(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants];

  return <Comp {...props} />;
}
