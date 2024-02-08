"use client";
import "client-only";

import { api } from "../api/client";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client() {
  const { data, isError }: any = api.useFindQuery({});

  const Comp = variants[data?.variant as keyof typeof variants];

  if (!Comp || isError || !data) {
    return <></>;
  }

  return <Comp {...(data as any)} />;
}
