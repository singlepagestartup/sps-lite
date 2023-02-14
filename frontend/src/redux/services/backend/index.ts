import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";
import { backendUrl } from "~utils/envs";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import utils from "@rogwild/next-utils";
const { SpringNotification } = utils.components;
const { createNotification } = SpringNotification;

const baseQuery = fetchBaseQuery({
  baseUrl: `${backendUrl}/api`,
  paramsSerializer: (object) => {
    return qs.stringify(object, {
      encodeValuesOnly: true,
    });
  },
  prepareHeaders: (headers) => {
    const token = localStorage.jwt;

    if (token) {
      headers.set(
        `Authorization`,
        token.startsWith(`Bearer `) ? token : `Bearer ${token}`
      );
    }

    return headers;
  },
});

const tagTypes = [`Review`, `Modal`, `Uploader`, `Currency`];

export const backendServiceApi = createApi({
  baseQuery,
  tagTypes,
  reducerPath: `backend`,
  endpoints: () => ({}),
});

export const rtkQueryErrorLogger = (api: any) => {
  return (next: any) => {
    return (action: any) => {
      // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
      if (isRejectedWithValue(action)) {
        if (action?.payload?.data?.error?.message) {
          // console.log(`🚀 ~ return ~ action`, action);
          createNotification({
            title: action.payload.data.error.name,
            message: action.payload.data.error.message,
            containerClassName: `@ow overflow-visible @bxsw drop-shadow-lg`,
            contentContainerClassName: ` @brr rounded-md`,
            headerClassName: `@ttc text-red-500`,
            duration: 10000,
          });
        }
      }

      return next(action);
    };
  };
};
