"use server";
import "server-only";

import { Suspense } from "react";
import { Component as Loader } from "../models/entities/loader/component";
import { Component as Layout } from "../models/entities/layout/component";
// import { Component as Modal } from "../entities/modal/component";
// import { Component as SlideOver } from "../entities/slide-over/component";

export async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section data-app="sps-website-builder" className="relative">
      {/* Suspense here is for static build, without that build will return nothing */}
      <Suspense>
        <Loader isServer={true} />
        <Layout>{children}</Layout>
        {/* <Modal />
          <SlideOver /> */}
      </Suspense>
    </section>
  );
}
