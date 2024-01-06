"use client";

import PageBlocks from "~components/page-blocks";
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
          pageBlocks={props.pageBlocks}
          showSkeletons={props.showSkeletons}
        />
      </div>
    </nav>
  );
}
