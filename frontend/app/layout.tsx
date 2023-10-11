import "../styles/fonts.css";
import "../styles/tailwind.scss";
import Modals from "~components/modals";
import TranslationsContextWrapper from "~hooks/use-translations/TranslationsContext";
import { ReduxProvider } from "~redux/index";
import { fonts } from "./fonts";
import SlideOvers from "~components/slide-overs";
import { Suspense } from "react";
import Layouts from "~components/layouts";
import Loaders from "~components/loader";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import { loaderPopulate } from "~utils/api/queries";
import GoogleTagManager from "~components/scripts/google-tag-manager";
import AdditionalHeadersWrapper from "src/contexts/additional-headers";
import { HocParamsProvider } from "src/contexts/hoc-params";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loader = await getBackendData({
    url: `${BACKEND_URL}/api/loader`,
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
                    <Loaders {...loader}>
                      <Layouts>{children}</Layouts>
                      <Modals />
                      <SlideOvers />
                    </Loaders>
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
