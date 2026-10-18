import type { IComponentPropsExtended } from "../interface";
import { Component as RbacModuleWidget } from "@sps/rbac/models/widget/frontend/component";
export function Component(props: IComponentPropsExtended) {
  return (
    <RbacModuleWidget
      isServer={props.isServer}
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
      {({ data }) =>
        data?.map((entity) => (
          <RbacModuleWidget
            key={entity.id}
            isServer={props.isServer}
            dataSource="props"
            data={entity}
            language={props.language}
            routeParams={props.routeParams}
            variant={entity.variant as any}
          />
        ))
      }
    </RbacModuleWidget>
  );
}
