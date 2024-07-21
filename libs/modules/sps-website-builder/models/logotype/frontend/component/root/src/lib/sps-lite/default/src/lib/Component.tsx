import { IComponentPropsExtended } from "./interface";
import Link from "next/link";
import { Component as LogotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/frontend/component/root";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.logotype"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`relative ${props.data.className || "w-full"}`}
    >
      {/* {props.data.url ? (
        <Link href={props.data.url}>
          {props.data.logotypesToSpsFileStorageWidgets.map((entity, index) => {
            return (
              <LogotypesToSpsFileStorageWidgets
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant="default"
                data={entity}
              />
            );
          })}
        </Link>
      ) : (
        props.data.logotypesToSpsFileStorageWidgets.map((entity, index) => {
          return (
            <LogotypesToSpsFileStorageWidgets
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="default"
              data={entity}
            />
          );
        })
      )} */}
    </div>
  );
}
