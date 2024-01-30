import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/faq-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/faq-block/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/faq-block/populate";
import { api } from "../api";

export interface IPageBlock extends IComponent, IPage {}
export interface IPageBlockExtended extends IComponentExtended, IPage {}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export async function PageBlock(props: IPageBlock) {
  const pageBlock = await api.findByIdAndName<IComponentExtended>({
    id: props.id,
    populate,
    name: "page-blocks.faqs-block",
  });

  const Comp = variants[pageBlock.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (!pageBlock) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...pageBlock} />;
}
