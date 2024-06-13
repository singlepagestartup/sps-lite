import "../styles/fonts.css";
import "../styles/tailwind.scss";

import { fonts } from "./fonts";
import { Suspense } from "react";
import { Toaster } from "@sps/shadcn";
import { Component as Admin } from "../src/components/admin";
import { Component as SpsLiteRbacSetSessionWrapper } from "@sps/sps-rbac-models-authentication-frontend-component-variants-sps-lite-set-session-wrapper";

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
        <SpsLiteRbacSetSessionWrapper
          isServer={false}
          variant="set-session-wrapper"
        >
          <Admin isServer={true} />
          <div className="relative">
            <Suspense>{children}</Suspense>
            <Toaster />
          </div>
        </SpsLiteRbacSetSessionWrapper>
      </body>
    </html>
  );
}
