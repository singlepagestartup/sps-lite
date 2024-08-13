"use client";

import { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import Cookie from "js-cookie";
import { useJwt } from "react-jwt";
import { SPS_RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS } from "@sps/shared-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">Generated variant</p>
      <p className="font-bold text-4xl">Model: subject</p>
      <p className="font-bold text-4xl">Variant: me</p>
    </div>
  );
}
