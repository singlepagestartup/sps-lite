"use client";

import { ISpsLiteNavbar } from ".";
import PageBlocks from "~components/page-blocks";

export default function Boxed(props: ISpsLiteNavbar) {
  if (props.isLoading) {
    return (
      <div className={props.className || ""}>
        <div
          className="shadow w-screen bg-white z-30 fixed h-16"
          style={{
            marginTop: `${
              (props.topbar &&
                props.topbarRef?.current?.querySelector("div")?.offsetHeight) ||
              0
            }px`,
          }}
        >
          <div className="mx-auto max-w-7xl p-2">
            <div className=" bg-slate-100 animate-pulse h-12 rounded-sm"></div>
          </div>
        </div>
      </div>
    );
  }

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
          <PageBlocks pageBlocks={props.pageBlocks} />
        </div>
      </nav>
    </div>
  );
}
