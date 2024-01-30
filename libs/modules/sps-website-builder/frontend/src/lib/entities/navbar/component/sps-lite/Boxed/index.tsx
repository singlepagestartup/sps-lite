"use client";

import { PageBlocks } from "../../../../../components/page-blocks";
import { INavbar } from "../..";

export default function Boxed(props: INavbar) {
  return (
    <nav
      data-collection-type="navbar"
      data-variant={props.variant}
      className={props.className || ""}
      style={{
        marginTop: `${
          (props.topbar &&
            props.topbarRef?.current?.querySelector("div")?.offsetHeight) ||
          0
        }px`,
      }}
    >
      <div className="navbar-container">
        <PageBlocks
          page={props.page}
          pageBlocks={props.pageBlocks}
          showSkeletons={props.showSkeletons}
          navbar={props}
        />
      </div>
    </nav>
  );
}
