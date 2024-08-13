import "../styles/fonts.css";
import "../styles/tailwind.scss";

import { fonts } from "./fonts";
import { Suspense } from "react";
import { Toaster } from "@sps/shared-ui-shadcn";
import { Component as Admin } from "../src/components/admin";
import { Component as SpsRbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Provider as SpsRbacProvider } from "@sps/rbac/frontend/component";
import { App as SpsBroadcast } from "@sps/broadcast/frontend/component";
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
          <SpsRbacProvider isServer={false} hostUrl="/">
            <SpsRbacSubject isServer={false} hostUrl="/" variant="init">
              <SpsBroadcast hostUrl="/" isServer={true} />
              <Admin hostUrl="/" isServer={true} />
              <div className="relative">
                {children}
                <Toaster />
              </div>
            </SpsRbacSubject>
          </SpsRbacProvider>
        </Suspense>
      </body>
    </html>
  );
}
