"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { Component } from "./Component";
import { Component as CreateFirst } from "./CreateFirst";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.getPage(props.params);

  if (!data) {
    return <CreateFirst />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
