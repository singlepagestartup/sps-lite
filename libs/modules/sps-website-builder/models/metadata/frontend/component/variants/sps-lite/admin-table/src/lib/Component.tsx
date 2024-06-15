import React from "react";
import { ModelEntitiesListCard } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "@sps/sps-website-builder-models-metadata-frontend-component-variants-sps-lite-admin-form";
import { Component as AdminTableRow } from "@sps/sps-website-builder-models-metadata-frontend-component-variants-sps-lite-admin-table-row";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="metadata"
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <ModelEntitiesListCard
        title="metadata"
        adminForm={
          <AdminForm
            isServer={props.isServer}
            hostUrl={props.hostUrl}
            variant="admin-form"
          />
        }
      >
        {props.data.map((entity, index) => {
          return (
            <AdminTableRow
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="admin-table-row"
              data={entity}
            />
          );
        })}
      </ModelEntitiesListCard>
    </div>
  );
}
