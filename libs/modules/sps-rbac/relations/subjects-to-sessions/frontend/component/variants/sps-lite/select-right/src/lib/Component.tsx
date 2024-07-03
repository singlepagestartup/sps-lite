"use client";

import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import { api } from "@sps/sps-rbac/relations/subjects-to-sessions/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-rbac/models/session/frontend/component/root";
import { variants } from "@sps/sps-rbac/relations/subjects-to-sessions/contracts/root";

const formSchema = z.object({
  subjectId: z.string().min(1),
  sessionId: z.string().min(1),
  variant: z.enum(variants).default("default"),
  className: z.string().optional(),
  orderIndex: z.number().default(0),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();
  const deleteEntity = api.delete();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      subjectId: props.data?.subjectId || props.subjectId,
      sessionId: props.data?.sessionId,
      className: props.data?.className || "",
      orderIndex: props.data?.orderIndex || 0,
      variant: props.data?.variant || "default",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.subjectId || !data.sessionId) {
      return;
    }

    if (props.data?.id) {
      updateEntity.mutate({
        id: props.data.id,
        data,
      });

      return;
    }

    createEntity.mutate({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-rbac/subject",
    actionFilter: (action) => {
      return action.type === "subject/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("subjectId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-rbac"
      data-relation="subjects-to-sessions"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity.mutate({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
              options={variants.map((variant) => [variant, variant])}
            />
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <FormField
              ui="shadcn"
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="sessionId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from sessions
          </h3>
          <CardContent className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
              options={variants.map((variant) => [variant, variant])}
            />
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <FormField
              ui="shadcn"
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Type order index"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="sessionId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
