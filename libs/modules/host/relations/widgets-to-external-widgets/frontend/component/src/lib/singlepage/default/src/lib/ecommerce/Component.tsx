import { IComponentPropsExtended } from "../interface";
import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceWidget } from "@sps/ecommerce/models/widget/frontend/component";
import { Component as SubjectsToEcommerceOrders } from "@sps/rbac/relations/subjects-to-ecommerce-orders/frontend/component";
import { Component as Product } from "@sps/ecommerce/models/product/frontend/component";
import { Component as Orders } from "./Orders";

export function Component(props: IComponentPropsExtended) {
  return (
    <RbacSubject isServer={props.isServer} hostUrl={props.hostUrl} variant="me">
      {({ data: subject }) => {
        if (!subject) {
          return <></>;
        }

        return (
          <EcommerceWidget
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
                      value: props.data.externalWidgetId,
                    },
                  ],
                },
              },
            }}
          >
            {({ data }) => {
              return data?.map((entity, index) => {
                return (
                  <EcommerceWidget
                    key={index}
                    isServer={props.isServer}
                    hostUrl={props.hostUrl}
                    variant={entity.variant as any}
                    data={entity}
                    products={
                      <Product
                        isServer={props.isServer}
                        hostUrl={props.hostUrl}
                        variant="find"
                      >
                        {({ data }) => {
                          return data?.map((entity, index) => {
                            return (
                              <Product
                                key={index}
                                isServer={props.isServer}
                                hostUrl={props.hostUrl}
                                variant="default"
                                data={entity}
                                action={
                                  <SubjectsToEcommerceOrders
                                    isServer={false}
                                    hostUrl={props.hostUrl}
                                    variant="ecommerce-order-product-cart"
                                    subject={subject}
                                    product={entity}
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
                                }
                              ></Product>
                            );
                          });
                        }}
                      </Product>
                    }
                    orders={<Orders {...props} subject={subject} />}
                  />
                );
              });
            }}
          </EcommerceWidget>
        );
      }}
    </RbacSubject>
  );
}
