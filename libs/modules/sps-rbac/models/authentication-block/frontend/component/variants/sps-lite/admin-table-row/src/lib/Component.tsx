"use client";

import React, { useEffect } from "react";
import { ModelEntityCard } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac-models-authentication-block-frontend-api-client";
import { invalidateServerTag } from "@sps/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Component as AdminForm } from "@sps/sps-rbac-models-authentication-block-frontend-component-variants-sps-lite-admin-form";

export function Component(props: IComponentPropsExtended) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteEntityResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["authentication-block"]));
      invalidateServerTag({ tag: "authentication-block" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteEntityResult]);

  return (
    <div
      data-module="sps-rbac"
      data-model="authentication-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      <ModelEntityCard
        onDeleteEntity={() => {
          if (props.data?.id) {
            deleteEntity({ id: props.data.id });
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
