"use client";

import { IModelExtended } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/model";
import { actions, IFindByIdActionProps } from "@sps/shared-frontend-api";
import { BACKEND_URL } from "@sps/shared-utils";
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
      host: BACKEND_URL,
      route: "/api/sps-website-builder",
      params,
      options,
    });

    return res;
  };
}
