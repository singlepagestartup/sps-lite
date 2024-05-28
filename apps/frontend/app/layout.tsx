import "../styles/fonts.css";
import "../styles/tailwind.scss";
import { TranslationsContextWrapper } from "@sps/hooks";
import { fonts } from "./fonts";
import {
  GoogleTagManager,
  RootLayout as SpsWebsiteBuilderRootLayout,
} from "@sps/sps-website-builder-frontend";
import { Suspense } from "react";
import { HocParamsProvider, AdditionalHeadersWrapper } from "@sps/store";
import { Toaster } from "@sps/shadcn";
import { Component as Admin } from "../src/components/admin";
// import { ReduxProvider as SpsRbacReduxProvider } from "@sps/sps-rbac-frontend/lib/redux";

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
        <Admin isServer={true} />
        {/* <div className="relative">
          <Suspense>
            {children}
            <TranslationsContextWrapper>
              <HocParamsProvider>
                <AdditionalHeadersWrapper>
                  <SpsWebsiteBuilderRootLayout>
                    {children}
                  </SpsWebsiteBuilderRootLayout>
                </AdditionalHeadersWrapper>
              </HocParamsProvider>
            </TranslationsContextWrapper>
          </Suspense>
          <Toaster />
        </div> */}
      </body>
    </html>
  );
}
