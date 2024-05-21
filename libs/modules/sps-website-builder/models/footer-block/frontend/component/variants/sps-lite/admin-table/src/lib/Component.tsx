import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "@sps/sps-website-builder-models-footer-block-frontend-component-variants-sps-lite-admin-form";
import { Component as AdminTableRow } from "@sps/sps-website-builder-models-footer-block-frontend-component-variants-sps-lite-admin-table-row";
import { ModelEntitiesListCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer-blocks"
      data-variant={props.variant}
      className={`${props.className || ""}`}
    >
      <ModelEntitiesListCard
        title="footer-blocks"
        adminForm={<AdminForm isServer={props.isServer} variant="admin-form" />}
      >
        {props.data.map((entity, index) => {
          return (
            <AdminTableRow
              key={index}
              isServer={false}
              variant="admin-table-row"
              data={entity}
            />
          );
        })}
      </ModelEntitiesListCard>
    </div>
  );
}
