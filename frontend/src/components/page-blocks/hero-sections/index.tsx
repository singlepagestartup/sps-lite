import { variants as spsLiteVariants } from "./sps-lite";
import { variants as spsVariants } from "./sps";
import { IComponent as IBackendPageBlock } from "~redux/services/backend/components/page-blocks/hero-section-block/interfaces";
import { IPage } from "..";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...spsVariants,
};

export default function HeroSections(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
