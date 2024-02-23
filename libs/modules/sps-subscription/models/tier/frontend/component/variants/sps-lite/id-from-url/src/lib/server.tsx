"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-subscription-models-tier-frontend-api";
import { Component } from "./Component";
import { headers } from "next/headers";
import { getPageUrlModelId } from "@sps/utils";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";
  const locale = headersList.get("x-sps-website-builder-locale") || "";

  const id = await getPageUrlModelId({
    url: pathname,
    locale,
    modelName: "tier",
  });

  if (!id) {
    return <></>;
  }

  const data = await api.server.findOne({
    id,
  });

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
