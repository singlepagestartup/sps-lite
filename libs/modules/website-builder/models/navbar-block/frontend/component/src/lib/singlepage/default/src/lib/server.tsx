"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/website-builder/models/navbar-block/sdk/server";
import { Component } from "./Component";
import { Component as Logotype } from "./assets/logotype";
import { Component as Content } from "./assets/content";
import { ErrorBoundary } from "@sps/ui-adapter";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  if (!props.data.id) {
    return <></>;
  }

  const data = await api.findById({
    id: props.data.id,
    ...props.apiProps,
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
