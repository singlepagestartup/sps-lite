import { api as spsWebsiteBuilderPageApi } from "@sps/sps-website-builder-models-page-frontend-api-server";
import { Component as SpsWebsiteBuilderPage } from "@sps/sps-website-builder-models-page-frontend-component";
import QueryString from "qs";

export const revalidate = 3600;

export async function generateStaticParams() {
  return spsWebsiteBuilderPageApi.fetch.urls();
}

export async function generateMetadata(props: any) {
  return spsWebsiteBuilderPageApi.fetch.generateMetadata(props);
}

export default async function Page(props: {
  params: { url?: string[] };
  searchParams?: { [key: string]: any };
}) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;
  const query = QueryString.stringify(props.searchParams);
  const hostUrl = query ? `${slashedUrl}?${query}` : slashedUrl;

  return (
    <SpsWebsiteBuilderPage
      isServer={true}
      variant="default"
      hostUrl={hostUrl}
      data={{
        url: hostUrl,
      }}
    />
  );
}
