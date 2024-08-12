"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/rbac/models/session/sdk/server";

export function Component(props: IComponentPropsExtended) {
  useEffect(() => {
    async function setSession() {
      await api.init();
    }

    setSession();
  }, []);

  return (
    <div data-module="rbac" data-model="subject" data-variant={props.variant}>
      {props.children}
    </div>
  );
}
