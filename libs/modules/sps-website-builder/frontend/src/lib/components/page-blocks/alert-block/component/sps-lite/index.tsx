import { IComponentProps, IComponentPropsExtended } from "..";
import Centered from "./Centered";

export const variants = {
  centered: Centered,
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
