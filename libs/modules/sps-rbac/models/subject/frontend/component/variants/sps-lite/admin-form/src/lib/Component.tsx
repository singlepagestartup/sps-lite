"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac/models/subject/frontend/api/client";
import { useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-rbac/models/subject/contracts/root";
import { Component as ParentAdminForm } from "@sps/shared-frontend-components/sps-lite/admin/admin-form/Component";
import { Component as SubjectsToIdentitiesAdminTable } from "@sps/sps-rbac/relations/subjects-to-identities/frontend/component/variants/sps-lite/admin-table";
import { Component as SubjectsToRolesAdminTable } from "@sps/sps-rbac/relations/subjects-to-roles/frontend/component/variants/sps-lite/admin-table";
import { Component as SubjectsToSessionsAdminTable } from "@sps/sps-rbac/relations/subjects-to-sessions/frontend/component/variants/sps-lite/admin-table";

const formSchema = z.object({
  variant: z.enum(variants),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
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

  useEffect(() => {
    if (updateEntity.data || createEntity.data) {
      //
    }
  }, [updateEntity, createEntity]);

  return (
    <ParentAdminForm
      module="sps-website-builder"
      form={form}
      id={props.data?.id}
      onSubmit={onSubmit}
      variant={props.variant}
      name="subject"
    >
      <div className="flex flex-col gap-6">
        <FormField
          ui="shadcn"
          type="select"
          label="Variant"
          name="variant"
          form={form}
          placeholder="Select variant"
          options={variants.map((variant) => [variant, variant])}
        />

        {props.data?.id ? (
          <SubjectsToIdentitiesAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "subjectId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          />
        ) : null}

        {props.data?.id ? (
          <SubjectsToRolesAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "subjectId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          />
        ) : null}

        {props.data?.id ? (
          <SubjectsToSessionsAdminTable
            variant="admin-table"
            hostUrl={props.hostUrl}
            isServer={props.isServer}
            apiProps={{
              params: {
                filters: {
                  and: [
                    {
                      column: "subjectId",
                      method: "eq",
                      value: props.data.id,
                    },
                  ],
                },
              },
            }}
          />
        ) : null}
      </div>
    </ParentAdminForm>
  );
}
