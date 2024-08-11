"use client";

import { Component as ParentComponent } from "@sps/sps-third-parties/models/telegram-message/frontend/component";

export function Component() {
  return (
    <ParentComponent
      hostUrl="/"
      isServer={false}
      variant="admin-table"
      adminForm={(props) => {
        return (
          <ParentComponent
            isServer={false}
            hostUrl={props.hostUrl}
            data={props.data}
            variant="admin-form"
          />
        );
      }}
    />
  );
}
