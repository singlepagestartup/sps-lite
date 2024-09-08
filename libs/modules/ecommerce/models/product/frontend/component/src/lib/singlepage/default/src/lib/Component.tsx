import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Component as ProductsToAttributes } from "@sps/ecommerce/relations/products-to-attributes/frontend/component";
import { Component as AttributeKeysToAttributes } from "@sps/ecommerce/relations/attribute-keys-to-attributes/frontend/component";
import { Component as ProductsToFileStorageModuleWidgets } from "@sps/ecommerce/relations/products-to-file-storage-module-widgets/frontend/component";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="ecommerce"
      data-model="product"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className || "")}
    >
      <div className="w-full">
        <ProductsToFileStorageModuleWidgets
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          apiProps={{
            params: {
              filters: {
                and: [
                  {
                    column: "productId",
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
                <ProductsToFileStorageModuleWidgets
                  key={index}
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant={entity.variant as any}
                  data={entity}
                />
              );
            });
          }}
        </ProductsToFileStorageModuleWidgets>
      </div>
      <Link href={`/products/${props.data.id}`} className="w-fit">
        <p className="font-bold w-fit">{props.data.title}</p>
      </Link>
      <div className="flex flex-col gap-3">
        <ProductsToAttributes
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="find"
          apiProps={{
            params: {
              filters: {
                and: [
                  {
                    column: "productId",
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
                <AttributeKeysToAttributes
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
                            value: entity.id,
                          },
                        ],
                      },
                    },
                  }}
                >
                  {({ data }) => {
                    return (
                      <ProductsToAttributes
                        key={index}
                        isServer={props.isServer}
                        hostUrl={props.hostUrl}
                        variant="default"
                        data={entity}
                      ></ProductsToAttributes>
                    );
                  }}
                </AttributeKeysToAttributes>
              );
            });
          }}
        </ProductsToAttributes>
      </div>
      {props.action}
    </div>
  );
}
