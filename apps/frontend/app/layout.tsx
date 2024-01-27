import "../styles/fonts.css";
import "../styles/tailwind.scss";
import { TranslationsContextWrapper } from "@sps/hooks";
import { fonts } from "./fonts";
import { RootLayout as SpsWebsiteBuilderRootLayout } from "@sps/sps-website-builder-frontend";
import { Suspense } from "react";
import GoogleTagManager from "../src/components/scripts/google-tag-manager";
import AdditionalHeadersWrapper from "../src/contexts/additional-headers";
import { HocParamsProvider } from "../src/contexts/hoc-params";
import { ReduxProvider } from "../src/redux";
import StoreConsumer from "../src/components/StoreConsumer";
import { ReduxProvider as SpsRbacReduxProvider } from "@sps/sps-rbac-frontend";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                  <SpsRbacReduxProvider>
                    <StoreConsumer />
                    <ReduxProvider>
                      <SpsWebsiteBuilderRootLayout>
                        {children}
                      </SpsWebsiteBuilderRootLayout>
                    </ReduxProvider>
                  </SpsRbacReduxProvider>
                </AdditionalHeadersWrapper>
              </HocParamsProvider>
            </TranslationsContextWrapper>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
