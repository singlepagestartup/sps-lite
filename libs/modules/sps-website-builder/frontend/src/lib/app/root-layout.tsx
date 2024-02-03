"use server";
import "server-only";

import { Suspense } from "react";
import { ReduxProvider } from "../redux";

export async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section data-app="sps-website-builder" className="relative">
      {/* Suspense here is for static build, without that build will return nothing */}
      {/* <ReduxProvider> */}
      <Suspense>{children}</Suspense>
      {/* </ReduxProvider> */}
    </section>
  );
}
