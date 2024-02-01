import { createApi } from "@reduxjs/toolkit/query/react";
import { transformResponseItem, rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-rbac-contracts-extended/lib/entities/user/populate";
import type { IEntity } from "@sps/sps-rbac-contracts-extended/lib/entities/user/interfaces";

const model = "users";
const rtkType = "User";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(`${BACKEND_URL}/api`),
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

    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
