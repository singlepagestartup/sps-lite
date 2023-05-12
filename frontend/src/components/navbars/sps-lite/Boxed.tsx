"use client";

import { ISpsLiteNavbar } from ".";
import PageBlocks from "~components/page-blocks";

export default function Boxed(props: ISpsLiteNavbar) {
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
          pageBlocks={props.pageBlocks}
          showSkeletons={props.showSkeletons}
        />
      </div>
    </nav>
  );
}
