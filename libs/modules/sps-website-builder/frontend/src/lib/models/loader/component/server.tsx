"use server";
import "server-only";

import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server() {
  const data = await api.find();

  const Comp = variants[data?.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...(data as any)} />;
}
