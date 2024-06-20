import { App as SpsHostApp } from "@sps/sps-host/frontend/root";

export const revalidate = 3600;

export async function generateMetadata(props: any) {
  return {
    title: "Host App",
    description: "Host App",
  };
}

export default async function Page(props: { params: { url?: string[] } }) {
  const url = props.params.url?.join("/") || "/";
  const slashedUrl = url.startsWith("/") ? url : `/${url}`;

  return <SpsHostApp isServer={true} variant="default" hostUrl={slashedUrl} />;
}
