import { api as spsHostPageApi } from "@sps/sps-host-models-page-frontend-api-server";
import { App as SpsHostApp } from "@sps/sps-host-frontend";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const urls = await spsHostPageApi.fetch.urls();

  return urls.filter((url) => {
    if (url.url.length === 0) {
      return false;
    }

    return true;
  });
}

export async function generateMetadata(props: any) {
  // return spsWebsiteBuilderPageApi.fetch.generateMetadata(props);
  return {
    title: "Host App",
    description: "Host App",
  };
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return (
    <SpsHostApp isServer={true} variant="default" hostUrl={slashedUrl}>
      <div className="w-full py-20 bg-red-500 flex items-center justify-center">
        HOST APP FROM NEXT
      </div>
    </SpsHostApp>
  );
}
