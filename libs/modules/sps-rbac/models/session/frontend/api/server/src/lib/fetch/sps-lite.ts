import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import {
  populate,
  route,
  IModelExtended,
} from "@sps/sps-rbac-models-session-frontend-api-model";

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findById<IModelExtended>({
      id,
      model: route,
      populate,
      rootPath: "/api/sps-rbac",
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
      rootPath: "/api/sps-rbac",
    });
  },
  init: async () => {
    const options: NextRequestOptions = {
      next: {
        revalidate: 0,
      },
    };

    const res = await fetch(
      `${BACKEND_URL}/api/sps-rbac/${route}/init`,
      options,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    const transformedData = transformResponseItem<{ data: { ok: true } }>(json);

    return transformedData;
  },
};
