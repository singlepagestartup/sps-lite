import TwoColumnsWithCenteredIntroduction from "./TwoColumnsWithCenteredIntroduction";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  "two-columns-with-centered-introduction": TwoColumnsWithCenteredIntroduction,
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
