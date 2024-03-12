import {
  Api,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
  EndpointBuilder,
} from "@reduxjs/toolkit/query";
import { QueryLifecycleApi } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { transformResponseItem } from "./transform-response-item";
import { prepareFormDataToSend } from "./preapare-form-data-to-send";
import { gzip } from "pako";
import QueryString from "qs";
import { TransformedApiArray } from "../types";

export type TRTKServiceApi = Api<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    any,
    FetchBaseQueryMeta
  >,
  any,
  any,
  any,
  any
>;

export type TRTKBuild = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    any,
    FetchBaseQueryMeta
  >,
  string,
  string
>;

export type TRTKOnQueryStarted = (
  arg: any,
  api: QueryLifecycleApi<any, any, any, any>,
) => any;

export const fetchBaseQueryBuilder = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    paramsSerializer: (object) => {
      const stringifiedQuery = QueryString.stringify(object, {
        encodeValuesOnly: true,
      });

      const compressedQuery = gzip(stringifiedQuery);
      const base64CompressedQuery =
        Buffer.from(compressedQuery).toString("base64");

      return base64CompressedQuery;
    },
    prepareHeaders: (headers) => {
      const username = localStorage["username"];
      if (username) {
        headers.set("Anonymus-Username", username);
      }

      const token = localStorage["jwt"];
      headers.set("Query-Encoding", "application/gzip");

      if (token) {
        headers.set(
          "Authorization",
          token.startsWith("Bearer ") ? token : `Bearer ${token}`,
        );
      }

      return headers;
    },
  });

function findApi<T>({
  serviceApi,
  build,
  populate: passedPopulate,
  model,
  rtkType,
  onQueryStarted: passedOnQueryStarted,
  onCacheEntryAdded: passedOnCacheEntryAdded,
}: {
  serviceApi: TRTKServiceApi;
  build: TRTKBuild;
  populate: any;
  model: string;
  rtkType: string;
  onQueryStarted?: TRTKOnQueryStarted;
  onCacheEntryAdded?: any;
}) {
  const routePostfix = serviceApi?.reducerPath === "frontend" ? ".json" : "";

  return build.query<TransformedApiArray<T>, any>({
    query: (params: any = {}) => {
      const {
        populate = passedPopulate,
        locale,
        filters,
        pagination,
        sort,
      } = params;

      return {
        url: `${model}${routePostfix ? routePostfix : ""}`,
        params: {
          populate,
          locale,
          filters,
          pagination,
          sort,
        },
      };
    },

    async onQueryStarted(...args) {
      if (typeof passedOnQueryStarted === "function") {
        passedOnQueryStarted(...args);
      }
    },

    async onCacheEntryAdded(...props: any) {
      if (typeof passedOnCacheEntryAdded === "function") {
        passedOnCacheEntryAdded(...props);
      }
    },

    transformResponse: (result) => {
      return transformResponseItem(result);
    },

    providesTags: (result: any) => {
      return result?.length
        ? [
            ...result.map(({ id }: any) => ({
              type: rtkType,
              id,
            })),
            { type: rtkType, id: "LIST" },
          ]
        : [{ type: rtkType, id: "LIST" }];
    },
  });
}

function findOneApi<T>({
  serviceApi,
  build,
  populate: passedPopulate,
  model,
  rtkType,
  onQueryStarted: passedOnQueryStarted,
  onCacheEntryAdded: passedOnCacheEntryAdded,
}: {
  serviceApi: TRTKServiceApi;
  build: TRTKBuild;
  populate: any;
  model: string;
  rtkType: string;
  onQueryStarted?: TRTKOnQueryStarted;
  onCacheEntryAdded?: any;
}) {
  const routePostfix = serviceApi?.reducerPath === "frontend" ? ".json" : "";

  return build.query<T, any>({
    query: (params: any = {}) => {
      const {
        id,
        populate = passedPopulate,
        locale,
        filters,
        pagination,
      } = params;

      return {
        url: `${model}/${id}${routePostfix ? routePostfix : ""}`,
        params: {
          populate,
          locale,
          filters,
          pagination,
        },
      };
    },

    async onQueryStarted(...args) {
      if (typeof passedOnQueryStarted === "function") {
        passedOnQueryStarted(...args);
      }
    },

    async onCacheEntryAdded(...props: any) {
      if (typeof passedOnCacheEntryAdded === "function") {
        passedOnCacheEntryAdded(...props);
      }
    },

    transformResponse: (result) => {
      return transformResponseItem(result);
    },

    providesTags: (result: any) => {
      return result?.id
        ? [
            { type: rtkType, id: result.id },
            { type: rtkType, id: "LIST" },
          ]
        : [];
    },
  });
}

function createApi<T>({
  serviceApi,
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
  routePostfix,
  onQueryStarted: passedOnQueryStarted,
}: {
  serviceApi: TRTKServiceApi;
  build: TRTKBuild;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
  routePostfix?: string;
  onQueryStarted?: TRTKOnQueryStarted;
}) {
  return build.mutation<T, any>({
    query: (params: any = {}) => {
      const { populate = passedPopulate } = params;
      const formData = prepareFormDataToSend(params);

      return {
        url: `${model}${routePostfix ? routePostfix : ""}`,
        method: "POST",
        params: {
          populate,
        },
        body: formData,
      };
    },

    async onQueryStarted(...args) {
      if (typeof passedOnQueryStarted === "function") {
        // @ts-ignore
        passedOnQueryStarted(...args);
      }
    },

    transformResponse: (result) => {
      return transformResponseItem(result);
    },

    invalidatesTags: invalidatesTagsFunc
      ? invalidatesTagsFunc
      : [{ type: rtkType, id: "LIST" }],
  });
}

function updateApi<T>({
  serviceApi,
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
  routePostfix,
  onQueryStarted: passedOnQueryStarted,
}: {
  serviceApi: TRTKServiceApi;
  build: TRTKBuild;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
  routePostfix?: string;
  onQueryStarted?: TRTKOnQueryStarted;
}) {
  return build.mutation<T, any>({
    query: (params: any = {}) => {
      const { id, populate = passedPopulate } = params;
      const formData = prepareFormDataToSend(params);

      return {
        url: `${model}/${id}${routePostfix ? routePostfix : ""}`,
        method: "PUT",
        params: {
          populate,
        },
        body: formData,
      };
    },

    async onQueryStarted(...args) {
      if (typeof passedOnQueryStarted === "function") {
        // @ts-ignore
        passedOnQueryStarted(...args);
      }
    },

    transformResponse: (result) => {
      return transformResponseItem(result);
    },

    invalidatesTags: invalidatesTagsFunc
      ? invalidatesTagsFunc
      : (result: any) => {
          return [
            { type: rtkType, id: result.id },
            { type: rtkType, id: "LIST" },
          ];
        },
  });
}

function deleteApi<T>({
  serviceApi,
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
  routePostfix,
  onQueryStarted: passedOnQueryStarted,
}: {
  serviceApi: TRTKServiceApi;
  build: TRTKBuild;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
  routePostfix?: string;
  onQueryStarted?: TRTKOnQueryStarted;
}) {
  return build.mutation<T, any>({
    query: (params: any = {}) => {
      const { id, populate = passedPopulate } = params;
      const formData = prepareFormDataToSend(params);

      return {
        url: `${model}/${id}${routePostfix ? routePostfix : ""}`,
        method: "DELETE",
        params: {
          populate,
        },
        body: formData,
      };
    },

    async onQueryStarted(...args) {
      if (typeof passedOnQueryStarted === "function") {
        // @ts-ignore
        passedOnQueryStarted(...args);
      }
    },

    transformResponse: (result) => {
      return transformResponseItem(result);
    },

    invalidatesTags: invalidatesTagsFunc
      ? invalidatesTagsFunc
      : (result: any) => {
          return [{ type: rtkType, id: "LIST" }];
        },
  });
}

export const api = {
  fetchBaseQueryBuilder,
  find: findApi,
  findOne: findOneApi,
  create: createApi,
  update: updateApi,
  delete: deleteApi,
};
