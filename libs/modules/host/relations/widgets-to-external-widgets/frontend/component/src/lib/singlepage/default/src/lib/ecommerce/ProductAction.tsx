"use client";

import { ISpsComponentBase } from "@sps/ui-adapter";
import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { Component as SubjectsToEcommerceOrders } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/frontend/component";

export function Component(
  props: ISpsComponentBase & {
    product: IProduct;
  },
) {
  return (
    <RbacSubject isServer={false} hostUrl={props.hostUrl} variant="me">
      {({ data: subject }) => {
        if (!subject) {
          return <></>;
        }

        return (
          <SubjectsToEcommerceOrders
            isServer={false}
            hostUrl={props.hostUrl}
            variant="ecommerce-order-product-cart"
            subject={subject}
            product={props.product}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "subjectId",
                      method: "eq",
                      value: subject.id,
                    },
                  ],
                },
              },
            }}
          />
        );
      }}
    </RbacSubject>
  );
}
