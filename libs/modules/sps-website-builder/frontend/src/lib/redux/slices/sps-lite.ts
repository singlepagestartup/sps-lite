import { api as flyoutApi } from "../entities/flyout/api";
import { api as footerApi } from "../entities/footer/api";
import { api as layoutApi } from "../entities/layout/api";
import { api as loaderApi } from "../entities/loader/api";
import { api as metatagApi } from "../entities/metatag/api";
import { api as modalApi } from "../entities/modal/api";
import { api as navbarApi } from "../entities/navbar/api";
import { api as pageApi } from "../entities/page/api";
import { api as sidebarApi } from "../entities/sidebar/api";
import { api as slideOverApi } from "../entities/slide-over/api";
import { api as sliderApi } from "../entities/slider/api";
import { api as themeApi } from "../entities/theme/api";
import { api as topbarApi } from "../entities/topbar/api";

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