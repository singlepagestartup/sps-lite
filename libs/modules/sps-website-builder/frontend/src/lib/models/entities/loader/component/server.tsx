"use server";
import "server-only";

import { api } from "../api/server";
import { variants } from "./variants";
import type { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/populate";

// default is required for dynamic import
export default async function Server() {
  const data = await api.find<IEntity>({ model: "loader", populate });

  const Comp = variants[data?.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...(data as any)} />;
}
