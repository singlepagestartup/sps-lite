import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { variants as spsVariants } from "./sps";
import { IComponent as IBackendPageBlock } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/hero-section-block/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/hero-section-block/populate";
import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { api } from "../api";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...spsVariants,
  ...startupVariants,
};

export async function PageBlock(props: IPageBlock) {
  const pageBlock = await api.findByPageIdAndComponentParams({
    id: props.page.id,
    populate,
    componentParams: props,
  });

  const Comp = variants[pageBlock.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...pageBlock} />;
}
