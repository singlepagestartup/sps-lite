import { PageBlocks } from "../../../../../components/page-blocks/omponent";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-collection-type="sidebar"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <PageBlocks isServer={props.isServer} pageBlocks={props.pageBlocks} />
    </div>
  );
}
