import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gzip } from "pako";
import qs from "qs";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { BACKEND_URL, FRONTEND_URL } from "~utils/envs";
import { createNotification } from "~components/notifications";
import {
  currencyPopulate,
  layoutPopulate,
  loaderPopulate,
  modalPopulate,
  pageBlockPopulate,
  reviewPopulate,
  slideOverPropulate,
} from "~utils/api/queries";

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
  "FormRequest",
  "Page",
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

/**
 * Using backendServiceApi by default means requests to working backend
 * You can pass requests through Next.js server by setting frontendServiceApi as
 * default api. And you can customize apis in /app/api/[[...url]]/route.ts file, or
 * create handlers by yourself.
 *
 * Static export requires to set frontendServiceApi, that creates json-files
 * with data in api folder. Without that pages will be empty.
 */
export const serviceApi = (() => {
  // You can set backendServiceApi if you wouldn't use Next.js server for proxying and caching data
  const api = frontendServiceApi;

  // if (process.env.SERVER_ENVIRONMENT === "icp") {
  //   // @ts-ignore
  //   api = frontendServiceApi;
  // }

  return api;
})();

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

export const frontendApiStaticModels = [
  {
    url: "flyouts",
    populate: pageBlockPopulate,
  },
  { url: "footers", populate: pageBlockPopulate },
  { url: "i18n/locales", populate: pageBlockPopulate },
  { url: "layouts", populate: layoutPopulate },
  { url: "modals", populate: modalPopulate },
  { url: "navbars", populate: pageBlockPopulate },
  { url: "sidebars", populate: pageBlockPopulate },
  { url: "slide-overs", populate: slideOverPropulate },
  { url: "topbars", populate: pageBlockPopulate },
  { url: "reviews", populate: reviewPopulate },
  { url: "loaders", populate: loaderPopulate },
  { url: "currencies", populate: currencyPopulate },
];
