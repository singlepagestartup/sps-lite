"use server";
import "server-only";

import { Suspense } from "react";

export async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section data-app="sps-website-builder" className="relative">
      {/* Suspense here is for static build, without that build will return nothing */}
      <Suspense>{children}</Suspense>
    </section>
  );
}
