import "../styles/fonts.css";
import "../styles/tailwind.scss";
import Modals from "~components/modal";
import { TranslationsContextWrapper } from "@sps/hooks";
import { ReduxProvider } from "../src/redux/index";
import { fonts } from "./fonts";
import SlideOvers from "~components/slide-over";
import { Suspense } from "react";
import Layout from "~components/layout";
import Loader from "~components/loader";
import { BACKEND_URL, getBackendData } from "@sps/utils";
import GoogleTagManager from "~components/scripts/google-tag-manager";
import AdditionalHeadersWrapper from "../src/contexts/additional-headers";
import { HocParamsProvider } from "../src/contexts/hoc-params";
import { populate as loaderPopulate } from "@sps/sps-website-builder-frontend/lib/redux/entities/loader/populate";

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
