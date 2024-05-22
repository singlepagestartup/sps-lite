import React from "react";
import { ModelEntitiesListCard } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "@sps/startup-models-widget-frontend-component-variants-sps-lite-admin-form";
import { Component as AdminTableRow } from "@sps/startup-models-widget-frontend-component-variants-sps-lite-admin-table-row";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
      data-model="widget"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <ModelEntitiesListCard
        title="widgets"
        adminForm={<AdminForm isServer={props.isServer} variant="admin-form" />}
      >
        {props.data.map((entity, index) => {
          return (
            <AdminTableRow
              key={index}
              isServer={props.isServer}
              variant="admin-table-row"
              data={entity}
            />
          );
        })}
      </ModelEntitiesListCard>
    </div>
  );
}
