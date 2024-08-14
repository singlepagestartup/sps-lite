import { IComponentPropsExtended } from "../interface";
import { Component as SubjectsToEcommerceOrders } from "@sps/rbac/relations/subjects-to-ecommerce-orders/frontend/component";
import { Component as Product } from "@sps/ecommerce/models/product/frontend/component";
import { IModel as ISubject } from "@sps/rbac/models/subject/sdk/model";

export function Component(
  props: IComponentPropsExtended & {
    subject: ISubject;
  },
) {
  return (
    <Product isServer={props.isServer} hostUrl={props.hostUrl} variant="find">
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
                  subject={props.subject}
                  product={entity}
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "subjectId",
                            method: "eq",
                            value: props.subject.id,
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
  );
}
