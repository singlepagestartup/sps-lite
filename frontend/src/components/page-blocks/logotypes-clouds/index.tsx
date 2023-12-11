import { variants as spsLiteVariants } from "./sps-lite";
import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/logotypes-cloud-block/interfaces";

export interface IPageBlock extends IBackendComponentPageBlock {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
};

export default function LogotypesClouds(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
