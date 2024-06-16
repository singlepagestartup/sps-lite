import { api as spsWebsiteBuilderPageApi } from "@sps/sps-website-builder-models-page-frontend-api-server";
import { Component as SpsWebsiteBuilderPage } from "@sps/sps-website-builder-models-page-frontend-component";

export const revalidate = 3600;

export async function generateStaticParams() {
  const urls = await spsWebsiteBuilderPageApi.fetch.urls();

  return urls.filter((url) => {
    if (url.url.length === 0) {
      return false;
    }

    return true;
  });
}

export async function generateMetadata(props: any) {
  return spsWebsiteBuilderPageApi.fetch.generateMetadata(props);
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return (
    <SpsWebsiteBuilderPage
      isServer={true}
      variant="default"
      hostUrl={slashedUrl}
      data={{
        url: slashedUrl,
      }}
    />
  );
}
