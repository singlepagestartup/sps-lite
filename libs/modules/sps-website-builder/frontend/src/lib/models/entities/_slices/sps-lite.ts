import { api as flyoutApi } from "../flyout/api/client";
import { api as footerApi } from "../footer/api/client";
import { api as layoutApi } from "../layout/api/client";
import { api as loaderApi } from "../loader/api/client";
import { api as localeApi } from "../locale/api/client";
import { api as metatagApi } from "../metatag/api/client";
import { api as modalApi } from "../modal/api/client";
import { api as navbarApi } from "../navbar/api/client";
import { api as pageApi } from "../page/api/client";
import { api as sidebarApi } from "../sidebar/api/client";
import { api as slideOverApi } from "../slide-over/api/client";
import { api as sliderApi } from "../slider/api/client";
import { api as themeApi } from "../theme/api/client";
import { api as topbarApi } from "../topbar/api/client";

export const slices = {
  middlewares: [
    flyoutApi.middleware,
    footerApi.middleware,
    layoutApi.middleware,
    loaderApi.middleware,
    metatagApi.middleware,
    modalApi.middleware,
    navbarApi.middleware,
    pageApi.middleware,
    sidebarApi.middleware,
    slideOverApi.middleware,
    sliderApi.middleware,
    themeApi.middleware,
    topbarApi.middleware,
    localeApi.middleware,
  ],
  reducer: {
    [flyoutApi.reducerPath]: flyoutApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [layoutApi.reducerPath]: layoutApi.reducer,
    [loaderApi.reducerPath]: loaderApi.reducer,
    [metatagApi.reducerPath]: metatagApi.reducer,
    [modalApi.reducerPath]: modalApi.reducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [sidebarApi.reducerPath]: sidebarApi.reducer,
    [slideOverApi.reducerPath]: slideOverApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [themeApi.reducerPath]: themeApi.reducer,
    [topbarApi.reducerPath]: topbarApi.reducer,
    [localeApi.reducerPath]: localeApi.reducer,
  },
};
