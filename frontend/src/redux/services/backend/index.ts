import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gzip } from "pako";
import qs from "qs";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { BACKEND_URL, FRONTEND_URL } from "~utils/envs";
import { createNotification } from "~components/notifications";

const getBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    paramsSerializer: (object) => {
      const stringifiedQuery = qs.stringify(object, {
        encodeValuesOnly: true,
      });

      const compressedQuery = gzip(stringifiedQuery);
      const base64CompressedQuery =
        Buffer.from(compressedQuery).toString("base64");

      return base64CompressedQuery;
    },
    prepareHeaders: (headers) => {
      const token = localStorage.jwt;

      if (token) {
        headers.set(
          "Authorization",
          token.startsWith("Bearer ") ? token : `Bearer ${token}`,
        );
      }

      return headers;
    },
  });

const tagTypes = [
  "Currency",
  "Navbar",
  "Modal",
  "Footer",
  "Flyout",
  "Layout",
  "Sidebar",
  "Review",
  "SlideOver",
  "Topbar",
  "Loader",
];

export const backendServiceApi = createApi({
  baseQuery: getBaseQuery(BACKEND_URL),
  tagTypes,
  reducerPath: "backend",
  endpoints: () => ({}),
});

export const frontendServiceApi = createApi({
  baseQuery: getBaseQuery(FRONTEND_URL),
  tagTypes,
  reducerPath: "frontend",
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
            className: "notification-error",
            duration: 10000,
          });
        }
      }

      return next(action);
    };
  };
};
