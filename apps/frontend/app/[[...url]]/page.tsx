// import { page } from "@sps/sps-website-builder-frontend";

export const dynamicParams = true;

export async function generateStaticParams() {
  // return page.generateStaticParams();
  return [];
}

export async function generateMetadata(props: any) {
  // return page.generateMetadata(props);
  return {
    title: "Single Page Startup",
    description: "Single Page Startup",
    icons: {
      icon: "/images/favicon.svg",
    },
  };
}

export default async function Page(props: any) {
  // return page.Page(props);
  return <div></div>;
}
