import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/features-section-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/features-section-block/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/features-section-block/populate";
import { api } from "../../../api";

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
    name: "page-blocks.features-section-block",
  });

  const Comp = variants[pageBlock.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (!pageBlock) {
    <Comp showSkeletons={true} {...props} {...props} />;
  }

  return <Comp {...props} {...pageBlock} />;
}
