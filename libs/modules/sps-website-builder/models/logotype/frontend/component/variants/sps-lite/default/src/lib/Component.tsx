import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  const Comp = props.data.url ? Link : "div";

  return (
    <Comp
      data-module="sps-website-builder"
      data-model="elements.logotype"
      data-variant={props.variant}
      className={`relative ${props.data.className || "w-full"}`}
      href={props.data.url || ""}
    >
      {props.data.media?.length ? (
        <File
          isServer={props.isServer}
          variant="image"
          data={props.data.media[0]}
          containerClassName=""
          className="object-contain object-left"
        />
      ) : null}
    </Comp>
  );
}
