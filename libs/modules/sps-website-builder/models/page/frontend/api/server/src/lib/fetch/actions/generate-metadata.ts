"use server";

import { route } from "@sps/sps-website-builder-models-page-frontend-api-model";
import {
  BACKEND_URL,
  NextRequestOptions,
  transformResponseItem,
} from "@sps/shared-utils";

export async function action() {
  // const options: NextRequestOptions = {
  //   next: {
  //     revalidate: 0,
  //     tags: [route],
  //   },
  // };

  // const request = await fetch(
  //   `${BACKEND_URL}/api/sps-website-builder/metatags`,
  //   options,
  // );

  // if (!request.ok) {
  //   return {};
  // }

  // const metatagsJson = await request.json();
  // const metatags = transformResponseItem(metatagsJson);

  // if (!metatags?.length) {
  //   const defaultMetatagsRequest = await fetch(
  //     `${BACKEND_URL}/api/sps-website-builder/metatags`,
  //     options,
  //   );

  //   const defaultMetatagsJson = await defaultMetatagsRequest.json();
  //   const defaultMetatags = transformResponseItem(defaultMetatagsJson);

  //   if (!defaultMetatags?.length) {
  //     return {
  //       title: "Single Page Startup",
  //       description: "The fastest way to create startup",
  //       icons: {
  //         icon: "/assets/images/favicon.svg",
  //       },
  //     };
  //   }

  //   const defaultMetatag = defaultMetatags[0];

  //   const defaultMetadata = {
  //     title: defaultMetatag.title,
  //     description: defaultMetatag.description,
  //   } as any;

  //   if (defaultMetatag.favicon?.url) {
  //     // defaultMetadata.icons = {
  //     //   icon: getFileUrl(defaultMetatag.favicon),
  //     // };
  //   }

  //   return defaultMetadata;
  // }

  // const metatag = metatags[0];

  // const metadata = {
  //   title: metatag.title,
  //   description: metatag.description,
  // } as any;

  // // if (metatag.favicon?.url) {
  // //   metadata.icons = {
  // //     icon: getFileUrl(metatag.favicon),
  // //   };
  // // }

  return;
}
