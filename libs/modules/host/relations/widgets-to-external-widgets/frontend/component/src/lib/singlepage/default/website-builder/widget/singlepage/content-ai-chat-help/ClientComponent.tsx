"use client";

import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import type { IModel } from "@sps/rbac/models/subject/sdk/model";

interface IComponentProps {
  data: IModel;
}

export function Component(props: IComponentProps) {
  return (
    <Subject
      isServer={false}
      variant="me-crm-module-form-support-ai-chat"
      data={props.data}
    />
  );
}
