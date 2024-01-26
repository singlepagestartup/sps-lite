import { page } from "@sps/sps-website-builder-frontend";

export const dynamicParams = true;

export async function generateStaticParams() {
  return page.generateStaticParams();
}

export async function generateMetadata(props: any) {
  return page.generateMetadata(props);
}

export default async function Page(props: any) {
  return page.Page(props);
}
