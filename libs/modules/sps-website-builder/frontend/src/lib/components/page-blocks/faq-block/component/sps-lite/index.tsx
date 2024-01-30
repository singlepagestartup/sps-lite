import TwoColumnsWithCenteredIntroduction from "./TwoColumnsWithCenteredIntroduction";
import { IPageBlock, IPageBlockExtended } from "..";

export const variants = {
  "two-columns-with-centered-introduction": TwoColumnsWithCenteredIntroduction,
};

export default function SpsLite(props: IPageBlock | IPageBlockExtended) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
