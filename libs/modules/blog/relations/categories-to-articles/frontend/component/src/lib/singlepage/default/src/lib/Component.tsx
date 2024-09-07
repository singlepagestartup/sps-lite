import { IComponentPropsExtended } from "./interface";
import { Component as AttributeKey } from "@sps/blog/models/attribute-key/frontend/component";
import { cn } from "@sps/shared-frontend-client-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="blog"
      data-relation="categories-to-articles"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <AttributeKey
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
                  value: props.data.attributeKeyId,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <AttributeKey
                key={index}
                isServer={props.isServer}
                hostUrl={props.hostUrl}
                variant={entity.variant as any}
                data={entity}
              />
            );
          });
        }}
      </AttributeKey>
    </div>
  );
}
