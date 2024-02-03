import { PageBlocks } from "../../../../../components/page-blocks/omponent";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <footer
      data-collection-type="footer"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="footer-container">
        <PageBlocks isServer={props.isServer} pageBlocks={props.pageBlocks} />
      </div>
    </footer>
  );
}
