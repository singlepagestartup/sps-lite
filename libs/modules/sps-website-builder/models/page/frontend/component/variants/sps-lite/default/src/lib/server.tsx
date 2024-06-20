"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { Component } from "./Component";
import { api } from "@sps/sps-website-builder/models/page/frontend/api/server";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { notFound } from "next/navigation";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  if (!props.data || !props.data.url) {
    return <></>;
  }
  try {
    const data = await api.fetch.findByUrl({ url: props.data.url });

    if (!data) {
      return <></>;
    }

    return (
      <ErrorBoundary fallback={Error}>
        <Component {...props} data={data} />
      </ErrorBoundary>
    );
  } catch (error) {
    /**
     * @todo: Find better way for handling initial deployment
     * Initial deployment will not have data in the database
     */
    console.log(
      `sps-website-builder.page ~ variant: default ~ server ~ error:`,
      error,
    );
    notFound();
  }
}
