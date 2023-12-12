import { IPage } from "..";
import { variants as spsLiteVariants } from "./sps-lite";
import { IComponent as IBackendPageBlock } from "~redux/services/backend/components/page-blocks/not-found-block/interfaces";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
};

export default function NotFound(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
