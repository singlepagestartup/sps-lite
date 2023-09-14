import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { transformResponseItem } from "./transform-response-item";
import { prepareFormDataToSend } from "./preapare-form-data-to-send";

export function strapiFind<T>({
  build,
  populate: passedPopulate,
  model,
  rtkType,
}: {
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend"
  >;
  populate: any;
  model: string;
  rtkType: string;
}) {
  return build.query({
    query: (params: any = {}) => {
      const { populate = passedPopulate, locale, filters, pagination } = params;

      return {
        url: `${model}`,
        params: {
          populate,
          locale,
          filters,
          pagination,
        },
      };
    },

    transformResponse: (result) => {
      return transformResponseItem(result) as TransformedApiArray<T>;
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
  build,
  populate: passedPopulate,
  model,
  rtkType,
}: {
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend"
  >;
  populate: any;
  model: string;
  rtkType: string;
}) {
  return build.query({
    query: (params: any = {}) => {
      const {
        id,
        populate = passedPopulate,
        locale,
        filters,
        pagination,
      } = params;

      return {
        url: `${model}/${id}`,
        params: {
          populate,
          locale,
          filters,
        },
      };
    },

    transformResponse: (result) => {
      return transformResponseItem(result) as T;
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
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
}: {
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend"
  >;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
}) {
  return build.mutation({
    query: (params: any = {}) => {
      const { populate = passedPopulate } = params;
      const formData = prepareFormDataToSend(params);

      return {
        url: `${model}`,
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
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
}: {
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend"
  >;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
}) {
  return build.mutation({
    query: (params: any = {}) => {
      const { id, populate = passedPopulate } = params;
      const formData = prepareFormDataToSend(params);

      return {
        url: `${model}/${id}`,
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
  build,
  populate: passedPopulate = {},
  model,
  rtkType,
  invalidatesTagsFunc,
}: {
  build: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      any,
      FetchBaseQueryMeta
    >,
    string,
    "backend"
  >;
  populate: any;
  model: string;
  rtkType: string;
  invalidatesTagsFunc?: (result: any) => any[];
}) {
  return build.mutation({
    query: (params: any = {}) => {
      const { id, populate = passedPopulate } = params;
      const formData = prepareFormDataToSend(params);

      return {
        url: `${model}/${id}`,
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
