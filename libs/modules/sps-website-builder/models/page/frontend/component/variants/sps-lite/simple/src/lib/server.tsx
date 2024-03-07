"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { Error } from "./Error";
import { Component } from "./Component";
import { api } from "@sps/sps-website-builder-models-page-frontend-api";

// default is required for dynamic import
export default async function Server(props: IComponentPropsExtended) {
  // console.log(`🚀 ~ Server ~ props:`, props);
  const data = await api.fetch.getPage(props);
  // console.log(`🚀 ~ Server ~ data:`, data);

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
