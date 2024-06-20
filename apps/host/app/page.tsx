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
  const hostChildren = <HostApp />;

  return (
    <SpsHostApp
      isServer={true}
      variant="default"
      hostUrl={slashedUrl}
      hostChildren={hostChildren}
    />
  );
}

function HostApp() {
  return (
    <div className="w-full py-20 bg-red-500 flex items-center justify-center">
      HOST APP FROM NEXT
    </div>
  );
}
