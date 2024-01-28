import { api as flyoutApi } from "../entities/flyout";
import { api as footerApi } from "../entities/footer";
import { api as layoutApi } from "../entities/layout";
import { api as loaderApi } from "../entities/loader/api";
import { api as metatagApi } from "../entities/metatag";
import { api as modalApi } from "../entities/modal";
import { api as navbarApi } from "../entities/navbar";
import { api as pageApi } from "../entities/page";
import { api as sidebarApi } from "../entities/sidebar";
import { api as slideOverApi } from "../entities/slide-over";
import { api as sliderApi } from "../entities/slider";
import { api as themeApi } from "../entities/theme";
import { api as topbarApi } from "../entities/topbar";
import { api as localeApi } from "../entities/locale";

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
