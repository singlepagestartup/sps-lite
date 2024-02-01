import { PageBlocks } from "../../../../../components/page-blocks";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-collection-type="sidebar"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <PageBlocks pageBlocks={props.pageBlocks} />
    </div>
  );
}
