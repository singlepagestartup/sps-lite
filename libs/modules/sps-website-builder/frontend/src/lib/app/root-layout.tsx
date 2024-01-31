import { Suspense } from "react";
import { BACKEND_URL, getBackendData } from "@sps/utils";
import { populate as loaderPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/populate";
import { Entity as Loader } from "../entities/loader/component";
import { Entity as Layout } from "../entities/layout/component";
// import { Entity as Modal } from "../entities/modal/component";
// import { Entity as SlideOver } from "../entities/slide-over/component";

export const dynamic = "force-dynamic";

export async function RootLayout({ children }: { children: React.ReactNode }) {
  const loader = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/loader`,
    params: {
      populate: loaderPopulate,
    },
  });

  return (
    <section data-app="sps-website-builder" className="relative">
      {/* Suspense here is for static build, without that build will return nothing */}
      <Suspense>
        <Loader {...loader}>
          <Layout>{children}</Layout>
          {/* <Modal />
          <SlideOver /> */}
        </Loader>
      </Suspense>
    </section>
  );
}
