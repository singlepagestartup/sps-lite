import PageBlocks from "~components/page-blocks";
import { IFooter } from "../..";

export default function Boxed(props: IFooter) {
  return (
    <footer
      data-collection-type="footer"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="footer-container">
        <PageBlocks
          pageBlocks={props.pageBlocks}
          showSkeletons={props.showSkeletons}
        />
      </div>
    </footer>
  );
}
