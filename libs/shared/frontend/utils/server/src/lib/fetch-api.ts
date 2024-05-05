import {
  BACKEND_URL,
  TransformedApiArray,
  prepareFormDataToSend,
  transformResponseItem,
} from "@sps/shared-utils";
import QueryString from "qs";
import { cookies } from "next/headers";

async function findByIdAndName<T>(params: {
  id: number;
  name: string;
  populate: any;
  tag?: string;
  revalidate?: number;
}): Promise<T> {
  const { id, populate, name, tag, revalidate = 0 } = params;

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const fetchOptions = {
    next: {
      revalidate,
    },
  } as any;

  if (tag) {
    fetchOptions.next.tags = [tag];
  }

  const res = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/components/${name}/${id}?${stringifiedQuery}`,
    fetchOptions as any,
  );

  const json = await res.json();

  if (!res.ok) {
    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    throw new Error("Failed to fetch data");
  }

  const transformedData = transformResponseItem(json);

  return transformedData;
}

async function findOne<T>(params: {
  id: number;
  model: string;
  populate: any;
  rootPath?: string;
  tag?: string;
  revalidate?: number;
}): Promise<T> {
  const {
    id,
    populate,
    model,
    rootPath = "/api/sps-website-builder",
    tag,
    revalidate = 0,
  } = params;

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const fetchOptions = {
    next: {
      revalidate,
    },
  } as any;

  if (tag) {
    fetchOptions.next.tags = [tag];
  }

  const res = await fetch(
    `${BACKEND_URL}${rootPath}/${model}/${id}?${stringifiedQuery}`,
    fetchOptions,
  );

  const json = await res.json();

  if (!res.ok) {
    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    throw new Error("Failed to fetch data");
  }

  const transformedData = transformResponseItem(json);

  return transformedData;
}

async function find<T>(params: {
  model: string;
  populate: any;
  rootPath?: string;
  filters?: any;
  pagination?: any;
  tag?: string;
  sort?: string;
  revalidate?: number;
}): Promise<TransformedApiArray<T>> {
  const {
    populate,
    model,
    rootPath = "/api/sps-website-builder",
    filters,
    pagination,
    tag,
    sort,
    revalidate = 0,
  } = params;

  const cookiesList = cookies();
  // console.log(`🚀 ~ cookiesList:`, cookiesList);

  // cookiesList.getAll().map((cookie) => {
  //   console.log(`🚀 ~ cookiesList.getAll ~ cookie:`, cookie);
  // });

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
      filters,
      pagination,
      sort,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const fetchOptions = {
    next: {
      revalidate,
    },
  } as any;

  if (tag) {
    fetchOptions.next.tags = [tag];
  }

  const res = await fetch(
    `${BACKEND_URL}${rootPath}/${model}?${stringifiedQuery}`,
    fetchOptions,
  );

  const json = await res.json();

  if (!res.ok) {
    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    throw new Error("Failed to fetch data");
  }

  const transformedData = transformResponseItem(json);

  return transformedData;
}

async function create<T>(params: {
  model: string;
  populate: any;
  rootPath?: string;
  data: any;
  tag?: string;
  revalidate?: number;
}): Promise<T[]> {
  const {
    populate,
    model,
    rootPath = "/api/sps-website-builder",
    tag,
    revalidate = 0,
  } = params;

  const stringifiedQuery = QueryString.stringify(
    {
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  const formData = prepareFormDataToSend(params.data);

  const fetchOptions = {
    next: {
      revalidate,
    },
  } as any;

  if (tag) {
    fetchOptions.next.tags = [tag];
  }

  const res = await fetch(
    `${BACKEND_URL}${rootPath}/${model}?${stringifiedQuery}`,
    {
      ...fetchOptions,
      method: "POST",
      body: formData,
    } as any,
  );

  const json = await res.json();

  if (!res.ok) {
    if (json.error) {
      throw new Error(json.error.message || "Failed to fetch data");
    }

    throw new Error("Failed to fetch data");
  }

  const transformedData = transformResponseItem(json);

  return transformedData;
}

export const api = {
  findByIdAndName,
  findOne,
  find,
  create,
};
