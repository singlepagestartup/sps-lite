import React from "react";
import { IComponentProps } from "./interface";
import { variants } from "./variants";
import { Component as OpenGraphImage } from "./singlepage/opengraph-image/Component";

/**
 * Impossible to use object key for dynamic import, throws and error with pipe response
 */
export function Component(props: IComponentProps) {
  if (props.variant === "opengraph-image") {
    return <OpenGraphImage {...props} />;
  }

  return <div></div>;
}
