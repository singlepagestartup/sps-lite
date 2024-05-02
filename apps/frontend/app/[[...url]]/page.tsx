import { page } from "@sps/sps-website-builder-frontend";

export const dynamicParams = true;

// export async function generateStaticParams() {
//   return page.generateStaticParams();
// }

// export async function generateMetadata(props: any) {
//   return page.generateMetadata(props);
// }

export default async function Page(props: any) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-4xl">Single Page Startup</h1>
    </div>
  );
  // return page.Page(props);
}
