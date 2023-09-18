import {
  Api,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { transformResponseItem } from "./transform-response-item";
import { prepareFormDataToSend } from "./preapare-form-data-to-send";
import { coreModuleName } from "@reduxjs/toolkit/dist/query/core/module";
import { reactHooksModuleName } from "@reduxjs/toolkit/dist/query/react/module";

export function strapiFind<T>({
  serviceApi,
  build,
  populate: passedPopulate,
  model,
  rtkType,
}: {
  serviceApi: Api<
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
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend" | "frontend"
  >;
  populate: any;
  model: string;
  rtkType: string;
}) {
  const routePostfix = serviceApi?.reducerPath === "frontend" ? ".json" : "";

  return build.query<TransformedApiArray<T>, any>({
    query: (params: any = {}) => {
      const { populate = passedPopulate, locale, filters, pagination } = params;

      return {
        url: `${model}${routePostfix ? routePostfix : ""}`,
        params: {
          populate,
          locale,
          filters,
          pagination,
        },
      };
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

export function strapiFindOne<T>({
  serviceApi,
  build,
  populate: passedPopulate,
  model,
  rtkType,
}: {
  serviceApi: Api<
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
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend" | "frontend"
  >;
  populate: any;
  model: string;
  rtkType: string;
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

export function strapiCreate<T>({
  serviceApi,
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
  routePostfix,
}: {
  serviceApi: Api<
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
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend" | "frontend"
  >;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
  routePostfix?: string;
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

    transformResponse: (result) => {
      return transformResponseItem(result);
    },

    invalidatesTags: invalidatesTagsFunc
      ? invalidatesTagsFunc
      : [{ type: rtkType, id: "LIST" }],
  });
}

export function strapiUpdate<T>({
  serviceApi,
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
  routePostfix,
}: {
  serviceApi: Api<
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
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend" | "frontend"
  >;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
  routePostfix?: string;
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

export function strapiDelete<T>({
  serviceApi,
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
  routePostfix,
}: {
  serviceApi: Api<
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
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend" | "frontend"
  >;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
  routePostfix?: string;
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
