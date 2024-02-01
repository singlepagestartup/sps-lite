import { PageBlocks } from "../../../../../components/page-blocks";
import { INavbar } from "../..";

export default function Boxed(props: INavbar) {
  return (
    <nav
      data-collection-type="navbar"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="navbar-container">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </nav>
  );
}
