import { App as SpsHostApp } from "@sps/sps-host/frontend/component";
import { api as metadataApi } from "@sps/sps-host/models/metadata/sdk/server";

export const revalidate = 3600;
export const runtime = "nodejs";
/**
 * Running migrations that delete fields in database may cause errors in the application. Such as some_fields_missing error.
 * Dynamic mode helps to run project without building static pages.
 */
export const dynamic =
  process.env.NEW_MIGRATIONS === "true" || process.env.DYNAMIC === "true"
    ? "force-dynamic"
    : "auto";

export async function generateMetadata(props: any) {
  return metadataApi.generate({ catchErrors: true, ...props });
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return <SpsHostApp isServer={true} variant="default" hostUrl={slashedUrl} />;
}
