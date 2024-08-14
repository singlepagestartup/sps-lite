import { api as spsHostPageApi } from "@sps/host/models/page/sdk/server";
import { App as SpsHostApp } from "@sps/host/frontend/component";
import { api as metadataApi } from "@sps/host/models/metadata/sdk/server";

export const revalidate = 3600;
export const dynamicParams = true;
// export const dynamic = "force-dynamic";
export const experimental_ppr = true;

export async function generateStaticParams() {
  const urls = await spsHostPageApi.urls({ catchErrors: true });

  return (
    urls?.filter((url) => {
      if (url.url.length === 0) {
        return false;
      }

      return true;
    }) || []
  );
}

export async function generateMetadata(props: any) {
  return metadataApi.generate({ catchErrors: true, ...props });
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return <SpsHostApp isServer={true} variant="default" hostUrl={slashedUrl} />;
}
