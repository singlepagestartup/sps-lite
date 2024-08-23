"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/website-builder/models/widget/sdk/server";
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
    ...props.apiProps,
  });

  if (!data) {
    return <></>;
  }

  const logotype = <Logotype {...props} data={data} />;
  const content = <Content {...props} data={data} />;

  return (
    <Component {...props} data={data} content={content} logotype={logotype} />
  );
}
