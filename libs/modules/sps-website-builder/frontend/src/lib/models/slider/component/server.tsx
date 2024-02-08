"use server";
import "server-only";

import { IComponentProps } from "./interface";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  return <></>;
}
