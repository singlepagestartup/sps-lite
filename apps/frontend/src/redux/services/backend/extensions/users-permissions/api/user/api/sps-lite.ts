import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import { strapiFetchBaseQueryBuilder, strapiFindOne } from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IEntity } from "../interfaces";
import { transformResponseItem } from "~utils/api/transform-response-item";

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
