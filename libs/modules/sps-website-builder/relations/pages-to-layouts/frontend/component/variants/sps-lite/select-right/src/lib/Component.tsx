"use client";

import { IComponentPropsExtended } from "./interface";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@sps/shared-ui-shadcn";
import { api } from "@sps/sps-website-builder/relations/pages-to-layouts/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-select-input";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";

const formSchema = z.object({
  pageId: z.string().min(1),
  layoutId: z.string().min(1),
  className: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageId: props.data?.pageId || props.pageId,
      layoutId: props.data?.layoutId,
      className: props.data?.className,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.pageId || !data.layoutId) {
      return;
    }

    if (props.data?.id) {
      await updateEntity({
        id: props.data.id,
        data,
      });

      return;
    }

    await createEntity({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-website-builder/pages",
    actionFilter: (action) => {
      return action.type === "pages/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("pageId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="pages-to-layouts"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className=""
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col gap-0.5 overflow-hidden">
            <p className="text-xs text-muted-foreground">Variant</p>
            <p className="truncate">{props.data.variant}</p>
          </div>
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="layoutId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from layouts
          </h3>
          <CardContent>
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="layoutId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
