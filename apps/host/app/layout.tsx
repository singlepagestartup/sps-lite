import "../styles/fonts.css";
import "../styles/tailwind.scss";

import { fonts } from "./fonts";
import { Suspense } from "react";
import { Toaster } from "@sps/shadcn";
import { Component as Admin } from "../src/components/admin";
import { Component as SpsLiteRbacSetSessionWrapper } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-set-session-wrapper";
import Loading from "./loading";

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
        <Suspense fallback={<Loading />}>
          <SpsLiteRbacSetSessionWrapper
            isServer={false}
            hostUrl="/"
            variant="set-session-wrapper"
          >
            <Admin hostUrl="/" isServer={true} />
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
