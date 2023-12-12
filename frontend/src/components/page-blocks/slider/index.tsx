import { IPage } from "..";
import { variants as spsLiteVariants } from "./sps-lite";
import { IComponent as IBackendPageBlock } from "~redux/services/backend/components/page-blocks/slider-block/interfaces";

export interface ISlider extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
};

export default function Slider(props: ISlider) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
