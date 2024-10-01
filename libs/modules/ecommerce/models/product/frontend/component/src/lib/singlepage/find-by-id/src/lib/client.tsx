"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "@sps/ecommerce/models/product/sdk/client";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const { data } = api.findById({
    id: props.id,
  });

  useEffect(() => {
    if (props.set && typeof props.set === "function") {
      props.set(data);
    }
  }, [data, props]);

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
