"use client";

import { ISpsComponentBase } from "@sps/ui-adapter";
import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { Component as RbacSubjectsToEcommerceModuleOrders } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/frontend/component";
import { Component as RbacSubjectsToIdentities } from "@sps/rbac/relations/subjects-to-identities/frontend/component";

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
          <div className="flex flex-col gap-2">
            <RbacSubject
              isServer={false}
              hostUrl={props.hostUrl}
              variant="ecommerce-product-one-step-checkout"
              data={subject}
              product={props.product}
            />
            <RbacSubject
              isServer={false}
              hostUrl={props.hostUrl}
              variant="get-emails"
              data={subject}
            >
              {({ data: email }) => {
                if (!email) {
                  return (
                    <div className="flex flex-col gap-2">
                      <p>Add email for checkout</p>
                      <RbacSubjectsToIdentities
                        isServer={false}
                        hostUrl={props.hostUrl}
                        variant="create-by-identity-email"
                        subjectId={subject.id}
                      />
                    </div>
                  );
                }

                return (
                  <RbacSubjectsToEcommerceModuleOrders
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
          </div>
        );
      }}
    </RbacSubject>
  );
}
