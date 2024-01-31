import { IComponentProps, IComponentPropsExtended } from "..";
import Split from "./Split";

export const variants = {
  split: Split,
};

export default function Sps(props: IComponentProps | IComponentPropsExtended) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
