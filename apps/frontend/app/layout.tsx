import "../styles/fonts.css";
import "../styles/tailwind.scss";

import { fonts } from "./fonts";
import { Suspense } from "react";
import { Toaster } from "@sps/shadcn";
import { Component as Admin } from "../src/components/admin";
import { Wrapper as RbacWrapper } from "@sps/sps-rbac-frontend";

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
        <RbacWrapper>
          <Admin isServer={true} />
          <div className="relative">
            <Suspense>{children}</Suspense>
            <Toaster />
          </div>
        </RbacWrapper>
      </body>
    </html>
  );
}
