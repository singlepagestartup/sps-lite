"use client";
import { memo } from "react";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import { Component as EcommerceModuleOrder } from "@sps/ecommerce/models/order/frontend/component";
import { Component as UpdateDefault } from "../../update-default";
import { Component as DeleteDefault } from "../../delete-default";
import type { IRowProps } from "./interface";
export const Component = memo(function Row(props: IRowProps) {
  return (
    <div className="rounded-xl border p-3">
      {props.ecommerceModuleOrder.cartDetails?.lines.map((line) => (
        <div key={line.id}>
          <p className="text-sm text-muted-foreground">
            Quantity: {line.quantity}
          </p>
          {line.product ? (
            <EcommerceModuleProduct
              isServer={false}
              variant="cart-default"
              dataSource="props"
              data={line.product}
              language={props.language}
            />
          ) : (
            <p>Product unavailable</p>
          )}
        </div>
      ))}
      <div className="hidden">
        <EcommerceModuleOrder
          isServer={false}
          variant="form-field-default"
          dataSource="props"
          data={props.ecommerceModuleOrder}
          formFieldName={`ecommerceModule.orders.${props.index}.id`}
          entityFieldName="id"
          form={props.form}
        />
      </div>
      <UpdateDefault
        isServer={false}
        variant="ecommerce-module-order-update-default"
        data={props.subject}
        ecommerceModuleOrder={props.ecommerceModuleOrder}
        language={props.language}
      />
      <DeleteDefault
        isServer={false}
        variant="ecommerce-module-order-delete-default"
        data={props.subject}
        ecommerceModuleOrder={props.ecommerceModuleOrder}
        language={props.language}
      />
    </div>
  );
});
