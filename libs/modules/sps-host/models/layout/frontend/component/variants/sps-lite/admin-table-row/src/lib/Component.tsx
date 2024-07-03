"use client";

import React, { useEffect } from "react";
import { ModelEntityCard } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-host/models/layout/frontend/api/client";
import { invalidateServerTag } from "@sps/shared-frontend-client-store";
import { useRouter } from "next/navigation";
import { Component as AdminForm } from "@sps/sps-host/models/layout/frontend/component/variants/sps-lite/admin-form";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const deleteEntity = api.delete();

  useEffect(() => {
    if (deleteEntity.isSuccess) {
      // dispatch(api.rtk.util.invalidateTags(["layout"]));
      // invalidateServerTag({ tag: "layout" }).then(() => {
      //   router.refresh();
      // });
    }
  }, [deleteEntity]);

  return (
    <div
      data-module="sps-host"
      data-model="layout"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      <ModelEntityCard
        onDeleteEntity={() => {
          if (props.data?.id) {
            deleteEntity.mutate({ id: props.data.id });
          }
        }}
        data={props.data}
        adminForm={
          <AdminForm
            isServer={false}
            hostUrl={props.hostUrl}
            variant="admin-form"
            data={props.data}
          />
        }
      >
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">Title</p>
          <p className="truncate">{props.data.title}</p>
        </div>
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">Variant</p>
          <p className="truncate">{props.data.variant}</p>
        </div>
      </ModelEntityCard>
    </div>
  );
}
