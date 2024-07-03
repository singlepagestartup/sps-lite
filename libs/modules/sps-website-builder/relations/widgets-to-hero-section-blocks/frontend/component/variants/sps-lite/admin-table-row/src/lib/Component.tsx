"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/api/client";
import { Component as AdminForm } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-form";
import { useRouter } from "next/navigation";
import { invalidateServerTag } from "@sps/shared-frontend-client-store";
import { ModelEntityCard } from "@sps/ui-adapter";
import { Component as HeroSectionBlockAdminForm } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-form";
import { Component as WidgetAdminForm } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-form";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const deleteEntity = api.delete();

  useEffect(() => {
    if (deleteEntity.isSuccess) {
      // dispatch(api.rtk.util.invalidateTags(["widget"]));
      // invalidateServerTag({ tag: "widget" }).then(() => {
      //   router.refresh();
      // });
    }
  }, [deleteEntity]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="widget-to-hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
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
          <p className="text-xs text-muted-foreground">Variant</p>
          <p className="truncate">{props.data.variant}</p>
        </div>
      </ModelEntityCard>
      <div className="p-2 border">
        <div className="p-2 border-2 border-blue-400">
          <AdminForm
            isServer={false}
            hostUrl={props.hostUrl}
            variant="admin-form"
            data={props.data}
          />
        </div>
        <div className="p-2 border-2 border-purple-400">
          <WidgetAdminForm
            isServer={false}
            data={props.data.widget}
            variant="admin-form"
            hostUrl={props.hostUrl}
          />
        </div>
        <div className="p-2 border-2 border-green-400">
          <HeroSectionBlockAdminForm
            isServer={false}
            data={props.data.heroSectionBlock}
            variant="admin-form"
            hostUrl={props.hostUrl}
          />
        </div>
      </div>
    </div>
  );
}
