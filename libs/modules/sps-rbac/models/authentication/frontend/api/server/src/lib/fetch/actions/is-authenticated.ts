"use server";

import {
  route,
  IModelExtended,
} from "@sps/sps-rbac/models/authentication/frontend/api/model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";
import { cookies } from "next/headers";

export async function action() {
  const options: NextRequestOptions = {
    next: {
      revalidate: 0,
      tags: [route],
    },
    headers: {
      Cookie: cookies().toString(),
    },
  };

  const request = await fetch(
    `${BACKEND_URL}/api/sps-rbac/authentications/is-authenticatated`,
    options,
  );

  if (!request.ok) {
    // throw new Error(request.statusText);
    return;
  }

  const json = await request.json();

  if (json.error) {
    throw new Error(json.error.message || "Failed to fetch data");
  }

  const transformedData = transformResponseItem<IModelExtended>(json);

  return transformedData;
}
