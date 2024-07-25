"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-broadcast/models/channel/sdk/server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  try {
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

    return (
      <ErrorBoundary fallback={Error}>
        <Component {...props} data={data} />
      </ErrorBoundary>
    );
  } catch (error) {
    console.log(
      `sps-boradcast ~ channel ~ subscription ~ Server ~ error:`,
      error,
    );
    return <></>;
  }
}
