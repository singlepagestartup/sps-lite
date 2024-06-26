import { App as SpsHostApp } from "@sps/sps-host/frontend/root";
import { api as metadataApi } from "@sps/sps-host/models/metadata/frontend/api/server";

export const revalidate = 3600;
export const runtime = "nodejs";
export const dynamic = "force-static";

export async function generateMetadata(props: any) {
  return metadataApi.fetch.generate({ catchError: true, ...props });
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return <SpsHostApp isServer={true} variant="default" hostUrl={slashedUrl} />;
}
