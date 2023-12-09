import { createApi } from "@reduxjs/toolkit/query/react";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { BACKEND_URL, FRONTEND_URL } from "~utils/envs";
import { createNotification } from "~components/notifications";
import { populate as pageBlockPopulate } from "~redux/services/backend/components/page-blocks/populate";
import { strapiFetchBaseQueryBuilder } from "~utils/api/strapi-rtk";

const tagTypes = ["FormRequest"];

export const backendServiceApi = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes,
  reducerPath: "backend",
  endpoints: () => ({}),
});

export const frontendServiceApi = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(FRONTEND_URL),
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
  const api = backendServiceApi;

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
  { url: "navbars", populate: pageBlockPopulate },
  { url: "topbars", populate: pageBlockPopulate },
];
