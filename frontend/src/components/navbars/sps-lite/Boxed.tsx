"use client";

import { ISpsLiteNavbar } from ".";
import PageBlocks from "~components/page-blocks";

export default function Boxed(props: ISpsLiteNavbar) {
  return (
    <div className={props.className || ""}>
      <nav
        className="bg-white shadow w-screen z-30 fixed"
        style={{
          marginTop: `${
            (props.topbar &&
              props.topbarRef?.current?.querySelector("div")?.offsetHeight) ||
            0
          }px`,
        }}
      >
        <div className="w-full mx-auto max-w-7xl">
          <PageBlocks
            pageBlocks={props.pageBlocks}
            isLoading={props.isLoading}
          />
        </div>
      </nav>
    </div>
  );
}
