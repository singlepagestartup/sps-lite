import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as AdminTableRow } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table-row";
import { Component as AdminForm } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-form";
import { ModelEntitiesListCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar-block"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <ModelEntitiesListCard
        title="navbar-blocks"
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
