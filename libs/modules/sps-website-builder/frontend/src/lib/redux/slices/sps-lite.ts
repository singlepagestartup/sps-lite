import { api as flyoutApi } from "../../entities/flyout/api/client";
import { api as footerApi } from "../../entities/footer/api/client";
import { api as layoutApi } from "../../entities/layout/api/client";
import { api as loaderApi } from "../../entities/loader/api/client";
import { api as metatagApi } from "../../entities/metatag/api/client";
import { api as modalApi } from "../../entities/modal/api/client";
import { api as navbarApi } from "../../entities/navbar/api/client";
import { api as pageApi } from "../../entities/page/api/client";
import { api as sidebarApi } from "../../entities/sidebar/api/client";
import { api as slideOverApi } from "../../entities/slide-over/api/client";
import { api as sliderApi } from "../../entities/slider/api/client";
import { api as themeApi } from "../../entities/theme/api/client";
import { api as topbarApi } from "../../entities/topbar/api/server";
import { api as localeApi } from "../../entities/locale/api/client";
import { api as buttonApi } from "../../components/elements/button/api/client";
import { api as buttonsArrayApi } from "../../components/elements/buttons-array/api/client";
import { api as featureApi } from "../../components/elements/feature/api/client";
import { api as logotypeApi } from "../../components/elements/logotype/api/client";

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
    buttonApi.middleware,
    buttonsArrayApi.middleware,
    featureApi.middleware,
    logotypeApi.middleware,
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
    [buttonApi.reducerPath]: buttonApi.reducer,
    [buttonsArrayApi.reducerPath]: buttonsArrayApi.reducer,
    [featureApi.reducerPath]: featureApi.reducer,
    [logotypeApi.reducerPath]: logotypeApi.reducer,
  },
};
