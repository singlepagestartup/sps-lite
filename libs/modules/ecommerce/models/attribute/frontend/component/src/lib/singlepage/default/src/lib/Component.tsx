import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as AttributeKey } from "@sps/ecommerce/models/attribute-key/frontend/component";
import { Component as AttributesToAttributeKeys } from "@sps/ecommerce/relations/attribute-keys-to-attributes/frontend/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="ecommerce"
      data-model="attribute"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className || "")}
    >
      <AttributesToAttributeKeys
        isServer={props.isServer}
        hostUrl={props.hostUrl}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "attributeId",
                  method: "eq",
                  value: props.data.id,
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
                variant="find"
                apiProps={{
                  params: {
                    filters: {
                      and: [
                        {
                          column: "id",
                          method: "eq",
                          value: entity.attributeKeyId,
                        },
                      ],
                    },
                  },
                }}
              >
                {({ data }) => {
                  return data?.map((entity, index) => {
                    return (
                      <div key={index} className="flex gap-2 w-fit">
                        <AttributeKey
                          isServer={props.isServer}
                          hostUrl={props.hostUrl}
                          variant={entity.variant as any}
                          data={entity}
                        />
                        <p>{props.data[entity.field]}</p>
                      </div>
                    );
                  });
                }}
              </AttributeKey>
            );
          });
        }}
      </AttributesToAttributeKeys>
    </div>
  );
}
