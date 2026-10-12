"use client";

import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";

export function Component() {
  return (
    <Subject isServer={false} variant="authentication-me-default">
      {({ data }) =>
        data ? (
          <Subject
            isServer={false}
            variant="me-crm-module-form-support-ai-chat"
            data={data}
          />
        ) : null
      }
    </Subject>
  );
}
