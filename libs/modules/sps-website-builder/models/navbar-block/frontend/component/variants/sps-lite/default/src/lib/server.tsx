"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-website-builder/models/navbar-block/frontend/api/server";
import { Component } from "./Component";
import { Component as Logotype } from "./assets/logotype";
import { Component as Content } from "./assets/content";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  if (!props.data.id) {
    return <></>;
  }

  const data = await api.findById({
    id: props.data.id,
  });

  if (!data) {
    return <></>;
  }

  const logotype = <Logotype {...props} data={data} />;
  const content = <Content {...props} data={data} />;

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} content={content} logotype={logotype} />
    </ErrorBoundary>
  );
}
