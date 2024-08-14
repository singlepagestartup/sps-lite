import { IComponentPropsExtended } from "../interface";
import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceWidget } from "@sps/ecommerce/models/widget/frontend/component";
import { Component as Orders } from "./Orders";
import { Component as Products } from "./Products";

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
                    // products={<Products {...props} subject={subject} />}
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
