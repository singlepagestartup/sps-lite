import "../styles/fonts.css";
import "../styles/tailwind.scss";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "~redux/index";
import utils from "@rogwild/next-utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Modals from "~components/modals";

const { GTMPageView, loadScripts } = utils.vanilla;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = useRouter();

  useEffect(() => {
    if (pageProps?.meta?.gtmKey) {
      Promise.all([
        loadScripts({
          u: `/js/gtm.js`,
          id: pageProps?.meta?.gtmKey,
        }),
      ]).catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    const { events, query, asPath } = router;
    const handleRouteChange = (url: any) => GTMPageView(url);
    const referrer = query[`utm_referrer`] || query[`utm_referer`];
    events.on(`routeChangeComplete`, handleRouteChange);

    if (window && referrer) {
      window.utmReferer = referrer;
    }

    return () => {
      events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router]);

  return (
    <div className="relative">
      <Provider store={store}>
        <Component {...pageProps} />
        <div id="modal" />
        <div id="notification" />
        <Modals />
      </Provider>
    </div>
  );
}

export default App;
