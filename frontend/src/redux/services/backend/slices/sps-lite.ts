import { api as currencyApi } from "~redux/services/backend/api/currency/api";
import { api as flyoutApi } from "~redux/services/backend/api/flyout/api";
import { api as footerApi } from "~redux/services/backend/api/footer/api";
import { api as formRequestApi } from "~redux/services/backend/api/form-request/api";
import { api as layoutApi } from "~redux/services/backend/api/layout/api";
import { api as loaderApi } from "~redux/services/backend/api/loader/api";
import { api as modalApi } from "~redux/services/backend/api/modal/api";
import { api as navbarApi } from "~redux/services/backend/api/navbar/api";
import { api as pageApi } from "~redux/services/backend/api/page/api";
import { api as reviewApi } from "~redux/services/backend/api/review/api";
import { api as sidebarApi } from "~redux/services/backend/api/sidebar/api";
import { api as slideOverApi } from "~redux/services/backend/api/slide-over/api";
import { api as topbarApi } from "~redux/services/backend/api/topbar/api";

export const slices = {
  middlewares: [
    currencyApi.middleware,
    flyoutApi.middleware,
    footerApi.middleware,
    formRequestApi.middleware,
    layoutApi.middleware,
    loaderApi.middleware,
    modalApi.middleware,
    navbarApi.middleware,
    pageApi.middleware,
    reviewApi.middleware,
    sidebarApi.middleware,
    slideOverApi.middleware,
    topbarApi.middleware,
  ],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [flyoutApi.reducerPath]: flyoutApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [formRequestApi.reducerPath]: formRequestApi.reducer,
    [layoutApi.reducerPath]: layoutApi.reducer,
    [loaderApi.reducerPath]: loaderApi.reducer,
    [modalApi.reducerPath]: modalApi.reducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [sidebarApi.reducerPath]: sidebarApi.reducer,
    [slideOverApi.reducerPath]: slideOverApi.reducer,
    [topbarApi.reducerPath]: topbarApi.reducer,
  },
};
