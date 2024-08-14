"use client";

import { IComponentPropsExtended } from "../interface";
import { Component as SubjectsToEcommerceOrders } from "@sps/rbac/relations/subjects-to-ecommerce-orders/frontend/component";

export function Component(
  props: IComponentPropsExtended & {
    subject: any;
  },
) {
  return (
    <SubjectsToEcommerceOrders
      isServer={false}
      hostUrl={props.hostUrl}
      variant="find"
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
    >
      {({ data }) => {
        return data?.map((entity, index) => {
          return (
            <SubjectsToEcommerceOrders
              key={index}
              isServer={false}
              hostUrl={props.hostUrl}
              variant="default"
              data={entity}
            />
          );
        });
      }}
    </SubjectsToEcommerceOrders>
  );
}
