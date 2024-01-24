import { createApi } from "@reduxjs/toolkit/query/react";
import {
  transformResponseItem,
  strapiFetchBaseQueryBuilder,
  strapiFindOne,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import type { IEntity } from "../interfaces";

const model = "users";
const rtkType = "User";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getMe: build.query({
      query: () => {
        return {
          url: "users/me",
        };
      },

      transformResponse: (item) => {
        return transformResponseItem(item) as IEntity;
      },

      providesTags: (result) =>
        result ? [{ type: "User", id: result.id }] : [],
    }),

    getById: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
