"use client";

import {
  IModelExtended,
  host,
} from "@sps/sps-website-builder/models/hero-section-block/frontend/api/model";
import { actions, IFindByIdActionProps } from "@sps/shared-frontend-api";
export { Provider } from "./provider";

export function query({
  id,
  params,
  options,
}: {
  id: IFindByIdActionProps["id"];
  params?: IFindByIdActionProps["params"];
  options?: IFindByIdActionProps["options"];
}): () => Promise<IModelExtended> {
  return async () => {
    const res = await actions.findById<IModelExtended>({
      id,
      host,
      route: "/api/sps-website-builder/hero-section-blocks",
      params,
      options,
    });

    return res;
  };
}
