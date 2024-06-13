"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-rbac-models-session-frontend-api-server";

export function Component(props: IComponentPropsExtended) {
  useEffect(() => {
    async function setSession() {
      await api.fetch.find();
    }

    setSession();
  }, []);

  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-variant={props.variant}
    >
      {props.children}
    </div>
  );
}
