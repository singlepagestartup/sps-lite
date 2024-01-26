import { IPage } from "../../../../../../../../../apps/frontend/src/components/page-blocks";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendPageBlock } from "../../../redux/components/page-blocks/footer-block/interfaces";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function FooterBlock(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
