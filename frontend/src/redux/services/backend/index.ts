import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { BACKEND_URL } from "~utils/envs";
import { createNotification } from "~components/notifications";

const baseQuery = fetchBaseQuery({
  baseUrl: `${BACKEND_URL}/api`,
  paramsSerializer: (object) => {
    return qs.stringify(object, {
      encodeValuesOnly: true,
    });
  },
  prepareHeaders: (headers) => {
    const token = localStorage.jwt;

    if (token) {
      headers.set(
        "Authorization",
        token.startsWith("Bearer ") ? token : `Bearer ${token}`
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
  "FlyoutMenu",
  "Layout",
  "Sidebar",
  "Review",
  "SlideOver",
  "Topbar",
];

export const backendServiceApi = createApi({
  baseQuery,
  tagTypes,
  reducerPath: "backend",
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
            duration: 10000,
          });
        }
      }

      return next(action);
    };
  };
};
