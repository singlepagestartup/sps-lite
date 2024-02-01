import { api as flyoutApi } from "../flyout/api";
import { api as footerApi } from "../footer/api";
import { api as layoutApi } from "../layout/api";
import { api as loaderApi } from "../loader/api";
import { api as localeApi } from "../locale/api";
import { api as metatagApi } from "../metatag/api";
import { api as modalApi } from "../modal/api";
import { api as navbarApi } from "../navbar/api";
import { api as pageApi } from "../page/api";
import { api as sidebarApi } from "../sidebar/api";
import { api as slideOverApi } from "../slide-over/api";
import { api as sliderApi } from "../slider/api";
import { api as themeApi } from "../theme/api";
import { api as topbarApi } from "../topbar/api";

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
