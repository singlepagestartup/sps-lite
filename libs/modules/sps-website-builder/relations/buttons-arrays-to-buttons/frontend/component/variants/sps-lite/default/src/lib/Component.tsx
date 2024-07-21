import { IComponentPropsExtended } from "./interface";
import { Component as Button } from "@sps/sps-website-builder/models/button/frontend/component/root";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-relation="buttons-arrays-to-buttons"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Button
        variant="find"
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "eq",
                  value: props.data.buttonId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <Button
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant}
                data={entity}
              />
            );
          });
        }}
      </Button>
    </div>
  );
}
