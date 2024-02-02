import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IModel as IBackendPageBlock } from "@sps/sps-crm-contracts/lib/components/page-blocks/contact-section-block/interfaces";
import { IPage } from "@sps/sps-crm-contracts/lib/props";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function ContactSectonBlock(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
