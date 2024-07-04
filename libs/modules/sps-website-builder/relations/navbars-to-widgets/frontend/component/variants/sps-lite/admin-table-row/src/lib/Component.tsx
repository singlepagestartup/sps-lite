"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/relations/navbars-to-widgets/frontend/api/client";
import { Component as AdminForm } from "@sps/sps-website-builder/relations/navbars-to-widgets/frontend/component/variants/sps-lite/admin-form";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-table copy/Component";

export function Component(props: IComponentPropsExtended) {
  const deleteEntity = api.delete();

  useEffect(() => {
    if (deleteEntity.isSuccess) {
      //
    }
  }, [deleteEntity]);

  return (
    <ParentComponent
      id={props.data.id}
      module="sps-website-builder"
      name="navbars-to-widgets"
      type="relation"
      adminForm={
        <AdminForm
          isServer={false}
          hostUrl={props.hostUrl}
          variant="admin-form"
          data={props.data}
        />
      }
      onDelete={() => {
        if (props.data?.id) {
          deleteEntity.mutate({ id: props.data.id });
        }
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 pt-6">
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">Variant</p>
          <p className="truncate">{props.data.variant}</p>
        </div>
      </div>
    </ParentComponent>
  );
}
