"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { headers } from "next/headers";
import { BACKEND_URL, getBackendData, getFiltersFromPageUrl } from "@sps/utils";
import { populate as pagePopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/page/populate";
import { api } from "../../../api/server";
import { Component } from "./Component";
const R = require("ramda");

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const headersList = headers();
  const pathname = headersList.get("x-sps-website-builder-pathname") || "";

  const id = await getPageUrlModelId({
    url: pathname,
    modelName: "product",
  });

  const data = await api.findOne({
    id,
  });

  if (!data) {
    return <></>;
  }

  return <Component {...props} data={data} />;
}

async function getPageByUrl({ url }: { url: string }) {
  const page = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url`,
    params: { url, populate: pagePopulate },
  });

  return page;
}

async function getPageUrlModelId({
  url,
  modelName,
}: {
  url: string;
  modelName: string;
}) {
  const page = await getPageByUrl({ url });

  const filters = getFiltersFromPageUrl({ page, params: { url } });

  let id;

  const targetFilter = filters.find(
    (filter) => filter[modelName] !== undefined,
  );

  if (R.path([modelName, "id", "$in", 0], targetFilter)) {
    id = targetFilter[modelName].id["$in"][0];
  }

  return id;
}
