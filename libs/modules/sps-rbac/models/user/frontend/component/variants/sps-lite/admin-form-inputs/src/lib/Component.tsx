"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants, statuses } from "@sps/sps-rbac-models-user-contracts";
import { Component as UsersToIdentitiesSpsLiteSelectRight } from "@sps/sps-rbac-relations-users-to-identities-frontend-component-variants-sps-lite-select-right";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="user"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={props.form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />
        <FormField
          ui="shadcn"
          type="select"
          label="Status"
          name="status"
          form={props.form}
          placeholder="Select status"
          options={statuses.map((status) => [status, status])}
        />
        <ModelEntitiesListCard title="users-to-identities">
          <div className="flex flex-col gap-6">
            {props.data?.usersToIdentities.map((entity, index) => {
              return (
                <UsersToIdentitiesSpsLiteSelectRight
                  key={index}
                  data={entity}
                  isServer={props.isServer}
                  variant="select-right"
                />
              );
            })}
            <UsersToIdentitiesSpsLiteSelectRight
              isServer={props.isServer}
              variant="select-right"
              userId={props.data?.id}
            />
          </div>
        </ModelEntitiesListCard>
      </div>
    </div>
  );
}
