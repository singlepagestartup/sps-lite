"use client";

import React, { useEffect, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, Form } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { api } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/api/client";
import { Button, FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { variants } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/root";
import { Component as HeroSectionBlockAdminSelectInput } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-select-input";
import { Component as WidgetAdminSelectInput } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-select-input";

const formSchema = z.object({
  title: z.string(),
  variant: z.enum(variants).default("default"),
  className: z.string().optional(),
  heroSectionBlockId: z.string().optional(),
  widgetId: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  // useActionTrigger({
  //   storeName: "sps-website-builder/widgets-to-hero-section-blocks",
  //   actionFilter: (action) => {
  //     return (
  //       action.type ===
  //       "widgets-to-hero-section-blocks/executeMutation/fulfilled"
  //     );
  //   },
  //   callbackFunction: async (action) => {
  //     onFinish();
  //   },
  // });

  const [requestId, setRequestId] = useState<string | undefined>();

  const updateEntity = api.update({
    setRequestId: (requestId) => {
      setRequestId(requestId);
    },
  });
  const createEntity = api.create({
    setRequestId: (requestId) => {
      setRequestId(requestId);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      className: props.data?.className || "",
      heroSectionBlockId: props.data?.heroSectionBlockId || "",
      widgetId: props.data?.widgetId || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id) {
      updateEntity.mutate({ id: props.data?.id, data });
      return;
    }

    createEntity.mutate({
      data,
    });
  }

  return (
    <div
      data-module="sps-website-builder"
      data-model="widget-to-hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} widget-to-hero-section-block
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <div className="flex flex-col gap-6">
              <FormField
                ui="shadcn"
                type="text"
                name="title"
                label="Title"
                form={form}
                placeholder="Type title"
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
                type="select"
                label="Variant"
                name="variant"
                form={form}
                placeholder="Type title"
                options={variants.map((variant) => [variant, variant])}
              />
              <ModelEntitiesListCard title="widget">
                <div className="flex flex-col gap-6">
                  {props.data?.heroSectionBlock ? (
                    <WidgetAdminSelectInput
                      isServer={props.isServer}
                      hostUrl={props.hostUrl}
                      variant="admin-select-input"
                      formFieldName="widgetId"
                      form={form}
                    />
                  ) : (
                    <WidgetAdminSelectInput
                      isServer={props.isServer}
                      hostUrl={props.hostUrl}
                      variant="admin-select-input"
                      formFieldName="widgetId"
                      form={form}
                    />
                  )}
                </div>
              </ModelEntitiesListCard>

              <ModelEntitiesListCard title="hero-section-block">
                <div className="flex flex-col gap-6">
                  {props.data?.heroSectionBlock ? (
                    <HeroSectionBlockAdminSelectInput
                      isServer={props.isServer}
                      hostUrl={props.hostUrl}
                      variant="admin-select-input"
                      formFieldName="heroSectionBlockId"
                      form={form}
                    />
                  ) : (
                    <HeroSectionBlockAdminSelectInput
                      isServer={props.isServer}
                      hostUrl={props.hostUrl}
                      variant="admin-select-input"
                      formFieldName="heroSectionBlockId"
                      form={form}
                    />
                  )}
                </div>
              </ModelEntitiesListCard>
            </div>
          </CardContent>
          <div className="admin-edit-card-button-container">
            <Button ui="sps-admin" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Update" : "Create"}
            </Button>
          </div>
        </Card>
      </Form>
    </div>
  );
}
