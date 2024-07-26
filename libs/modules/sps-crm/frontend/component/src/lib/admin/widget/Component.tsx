"use client";

import { Component as ParentComponent } from "@sps/sps-crm/models/widget/frontend/component";

export function Component() {
  return (
    <ParentComponent
      hostUrl="/"
      isServer={false}
      variant="admin-table"
      adminForm={(props) => {
        return <ParentComponent {...props} variant="admin-form" />;
      }}
    />
  );
}
