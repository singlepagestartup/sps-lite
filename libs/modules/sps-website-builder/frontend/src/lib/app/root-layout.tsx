import { Suspense } from "react";
import { BACKEND_URL, getBackendData } from "@sps/utils";
import { populate as loaderPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/populate";
import { Loader } from "../components/loader";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { SlideOver } from "../components/slide-over";

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
        {/* <ReduxProvider> */}
        <Loader {...loader}>
          <Layout>{children}</Layout>
          <Modal />
          <SlideOver />
        </Loader>
        {/* </ReduxProvider> */}
      </Suspense>
    </section>
  );
}
