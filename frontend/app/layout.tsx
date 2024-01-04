import "../styles/fonts.css";
import "../styles/tailwind.scss";
import Modals from "~components/modal";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";
import { ReduxProvider } from "~redux/index";
import { fonts } from "./fonts";
import SlideOvers from "~components/slide-over";
import { Suspense } from "react";
import Layout from "~components/layout";
import Loader from "~components/loader";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import GoogleTagManager from "~components/scripts/google-tag-manager";
import AdditionalHeadersWrapper from "src/contexts/additional-headers";
import { HocParamsProvider } from "src/contexts/hoc-params";
import { populate as loaderPopulate } from "~redux/services/backend/extensions/sps-website-builder/api/loader/populate";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loader = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/loader`,
    params: {
      populate: loaderPopulate,
    },
  });

  return (
    <html className="scroll-smooth">
      <body
        className={`${fonts.defaultFont.variable} ${fonts.primaryFont.variable}`}
      >
        <Suspense>
          <GoogleTagManager />
        </Suspense>
        <div className="relative">
          {/* Suspense here is for static build, without that build will return nothing */}
          <Suspense>
            <TranslationsContextWrapper>
              <HocParamsProvider>
                <AdditionalHeadersWrapper>
                  <ReduxProvider>
                    <Loader {...loader}>
                      <Layout>{children}</Layout>
                      <Modals />
                      <SlideOvers />
                    </Loader>
                  </ReduxProvider>
                </AdditionalHeadersWrapper>
              </HocParamsProvider>
            </TranslationsContextWrapper>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
