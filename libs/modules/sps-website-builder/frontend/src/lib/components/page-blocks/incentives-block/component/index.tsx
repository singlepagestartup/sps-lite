import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendPageBlock } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/incentives-block/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/incentives-block/populate";
import { api } from "../api";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
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
