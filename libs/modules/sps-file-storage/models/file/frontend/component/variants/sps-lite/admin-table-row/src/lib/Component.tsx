"use client";

import React, { Suspense, useEffect } from "react";
import { ErrorBoundary, ModelEntityCard } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-file-storage-models-file-frontend-api-client";
import { invalidateServerTag } from "@sps/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Component as AdminForm } from "@sps/sps-file-storage-models-file-frontend-component-variants-sps-lite-admin-form";
import { BACKEND_URL } from "@sps/shared-utils";
import Image from "next/image";

export function Component(props: IComponentPropsExtended) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  useEffect(() => {
    if (deleteEntityResult.isSuccess) {
      dispatch(api.rtk.util.invalidateTags(["file"]));
      invalidateServerTag({ tag: "file" }).then(() => {
        router.refresh();
      });
    }
  }, [deleteEntityResult]);

  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-id={props.data?.id || ""}
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
          <AdminForm
            isServer={false}
            hostUrl={props.hostUrl}
            variant="admin-form"
            data={props.data}
          />
        }
      >
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">Variant</p>
          <p className="truncate">{props.data.variant}</p>
        </div>
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <p className="text-xs text-muted-foreground">File</p>
          <p className="truncate">{props.data.file}</p>
          {props.data.file ? (
            <ErrorBoundary>
              <div className="w-full relative aspect-w-1 aspect-h-1">
                <Image
                  src={`${BACKEND_URL}${props.data.file}`}
                  alt=""
                  className="object-contain"
                  fill={true}
                />
              </div>
            </ErrorBoundary>
          ) : null}
        </div>
      </ModelEntityCard>
    </div>
  );
}
