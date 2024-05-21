"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder-models-button-frontend-api-client";
import { invalidateServerTag } from "@sps/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Component as AdminForm } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-form";
import { ModelEntityCard } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteEntityResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["button"]));
      invalidateServerTag({ tag: "button" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="button"
      data-variant={props.variant}
      className=""
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
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Title</p>
          <p>{props.data.title}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Variant</p>
          <p>{props.data.variant}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Url</p>
          <p>{props.data.url}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-muted-foreground">Class Name</p>
          <p>{props.data.className || ""}</p>
        </div>
      </ModelEntityCard>
    </div>
  );
}
