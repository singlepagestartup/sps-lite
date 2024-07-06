import { api as spsHostPageApi } from "@sps/sps-host/models/page/frontend/api/server";
import { App as SpsHostApp } from "@sps/sps-host/frontend/root";
import { api as metadataApi } from "@sps/sps-host/models/metadata/frontend/api/server";

export const revalidate = 3600;
export const dynamicParams = true;
// export const dynamic = "force-static";
export const runtime = "nodejs";

export async function generateStaticParams() {
  const urls = await spsHostPageApi.urls();

  return urls.filter((url) => {
    if (url.url.length === 0) {
      return false;
    }

    return true;
  });
}

export async function generateMetadata(props: any) {
  return metadataApi.generate({ catchError: true, ...props });
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return <SpsHostApp isServer={true} variant="default" hostUrl={slashedUrl} />;
}
