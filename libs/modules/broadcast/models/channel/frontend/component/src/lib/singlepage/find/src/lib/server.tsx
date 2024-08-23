"use server";
import "server-only";

import { IComponentProps, variant, IModel } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/broadcast/models/channel/sdk/server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  try {
    const data = await api.find(props.apiProps);

    if (!data) {
      return <></>;
    }

    if (props.children) {
      return props.children({ data });
    }

    return <></>;
  } catch (error) {
    console.log(`broadcast ~ channel ~ server ~ error:`, error);
  }
}
