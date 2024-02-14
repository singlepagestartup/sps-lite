"use server";
import "server-only";

import { IComponentProps } from "./find-one/interface";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  return <></>;
}
