import { PageBlocks } from "../../../../../components/page-blocks/index";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return <PageBlocks {...props} />;
}
