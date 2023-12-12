import { IPage } from "..";
import { variants as spsLiteVariants } from "./sps-lite";
import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/cta-section-block/interfaces";

export interface IPageBlock extends IBackendComponentPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
};

export default function CtaSections(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
