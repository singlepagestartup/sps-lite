"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "@sps/sps-website-builder-models-layout-frontend-component-variants-sps-lite-admin-form";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api-client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { invalidateServerTag } from "@sps/store";
import { ModelEntityCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteEntityResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["layout"]));
      invalidateServerTag({ tag: "layout" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
    >
      <ModelEntityCard
        onDeleteEntity={() => {
          if (props.data?.id) {
            deleteEntity({ id: props.data.id });
          }
        }}
        data={props.data}
        adminForm={
          <AdminForm isServer={false} variant="admin-form" data={props.data} />
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
