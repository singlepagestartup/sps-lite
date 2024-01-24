import { api as flyoutApi } from "../api/flyout/api";
import { api as footerApi } from "../api/footer/api";
import { api as layoutApi } from "../api/layout/api";
import { api as loaderApi } from "../api/loader/api";
import { api as metatagApi } from "../api/metatag/api";
import { api as modalApi } from "../api/modal/api";
import { api as navbarApi } from "../api/navbar/api";
import { api as pageApi } from "../api/page/api";
import { api as sidebarApi } from "../api/sidebar/api";
import { api as slideOverApi } from "../api/slide-over/api";
import { api as sliderApi } from "../api/slider/api";
import { api as themeApi } from "../api/theme/api";
import { api as topbarApi } from "../api/topbar/api";

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
  },
};
