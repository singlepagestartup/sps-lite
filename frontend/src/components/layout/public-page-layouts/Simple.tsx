import { IPage } from "types";
import Footers from "~components/page-blocks/footers";
import MetaBlock from "~components/page-blocks/meta";
import Navbar from "~components/page-blocks/navbars";
import PageBlocks from "../page-blocks";

export default function Simple(props: IPage) {
  return (
    <>
      <MetaBlock {...props.meta} />
      <div className="relative">
        <Navbar {...props.navbar} />
        <div className="pt-16">
          <PageBlocks {...props} />
        </div>
        <Footers {...props.footer} />
      </div>
    </>
  );
}
