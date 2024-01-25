import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { variants as spsVariants } from "./sps";
import { IComponent as IBackendPageBlock } from "@sps/sps-website-builder-frontend/lib/redux/components/page-blocks/hero-section-block/interfaces/index";
import { IPage } from "..";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...spsVariants,
  ...startupVariants,
};

export default function HeroSectionBlock(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
