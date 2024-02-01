import { PageBlocks } from "../../../../../components/page-blocks";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <nav
      data-collection-type="navbar"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="navbar-container">
        <PageBlocks isServer={false} pageBlocks={props.pageBlocks} />
      </div>
    </nav>
  );
}
