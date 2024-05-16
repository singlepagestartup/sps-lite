import { IComponentPropsExtended } from "./interface";
import Link from "next/link";
import { Component as LogotypesToFiles } from "@sps/sps-website-builder-relations-logotypes-to-files-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.logotype"
      data-variant={props.variant}
      className={`relative ${props.data.className || "w-full"}`}
    >
      {props.data.url ? (
        <Link href={props.data.url}>
          {props.data.logotypesToFiles.map((logotypeToFile, index) => {
            return (
              <LogotypesToFiles
                key={index}
                isServer={props.isServer}
                data={logotypeToFile}
                variant="default"
              />
            );
          })}
        </Link>
      ) : (
        <div>File</div>
      )}
    </div>
  );
}
