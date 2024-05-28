import { IComponentPropsExtended } from "./interface";
import Link from "next/link";
import { Component as WidgetsToLogotypesSpsLiteReverse } from "@sps/sps-website-builder-relations-widgets-to-logotypes-frontend-component-variants-sps-lite-reverse";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.logotype"
      data-variant={props.variant}
      className={`relative ${props.data.className || "w-full"}`}
    >
      {/* {props.data.url ? (
        <Link href={props.data.url}>
          {props.data.widgetsToLogotypes
            .filter((entity) => entity.direction === "reverse")
            .map((entity, index) => {
              return (
                <WidgetsToLogotypesSpsLiteReverse
                  key={index}
                  isServer={props.isServer}
                  variant="reverse"
                  data={entity}
                />
              );
            })}
        </Link>
      ) : (
        props.data.widgetsToLogotypes
          .filter((entity) => entity.direction === "reverse")
          .map((entity, index) => {
            return (
              <WidgetsToLogotypesSpsLiteReverse
                key={index}
                isServer={props.isServer}
                variant="reverse"
                data={entity}
              />
            );
          })
      )} */}
    </div>
  );
}
