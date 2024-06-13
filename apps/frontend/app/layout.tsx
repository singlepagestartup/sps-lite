import "../styles/fonts.css";
import "../styles/tailwind.scss";

import { fonts } from "./fonts";
import { Suspense } from "react";
import { Toaster } from "@sps/shadcn";
import { Component as Admin } from "../src/components/admin";
import { Component as SpsLiteRbacSetSessionWrapper } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-set-session-wrapper";
import Loading from "./loading";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth bg-bald-400">
      <body
        className={`${fonts.defaultFont.variable} ${fonts.primaryFont.variable}`}
      >
        <Suspense fallback={<Loading />}>
          <SpsLiteRbacSetSessionWrapper
            isServer={false}
            variant="set-session-wrapper"
          >
            <Admin isServer={true} />
            <div className="relative">
              {children}
              <Toaster />
            </div>
          </SpsLiteRbacSetSessionWrapper>
        </Suspense>
      </body>
    </html>
  );
}
