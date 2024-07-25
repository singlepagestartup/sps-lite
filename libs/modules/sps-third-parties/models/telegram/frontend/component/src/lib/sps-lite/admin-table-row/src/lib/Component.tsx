"use client";

import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-third-parties/models/telegram/sdk/client";
import { Component as AdminForm } from "../../../admin-form";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-table-row/Component";

export function Component(props: IComponentPropsExtended) {
  const deleteEntity = api.delete();

  return (
    <ParentComponent
      id={props.data.id}
      module="sps-third-parties"
      name="telegram"
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
          <p className="text-xs text-muted-foreground">Title</p>
          <p className="truncate">{props.data.title}</p>
        </div>
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">Status</p>
          <p className="truncate">{props.data.status}</p>
        </div>
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">Variant</p>
          <p className="truncate">{props.data.variant}</p>
        </div>
      </div>
    </ParentComponent>
  );
}
