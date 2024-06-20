"use server";

import { api as metadataApi } from "@sps/sps-website-builder/models/metadata/frontend/api/server";
import { api as spsFileStorageFileApi } from "@sps/sps-file-storage/models/file/frontend/api/server";
import { BACKEND_URL, HOST_URL } from "@sps/shared-utils";
import { Metadata } from "next/types";

export async function action(props: any) {
  const metadataEntites = await metadataApi.fetch.find();
  const primaryMetadata = metadataEntites.find(
    (item) => item.variant === "primary",
  );

  let image = "";
  const icons: Metadata["icons"] = [];

  if (primaryMetadata?.metadataToSpsFileStorageModuleFiles?.length) {
    for (const metadataToSpsFileStorageModuleFile of primaryMetadata.metadataToSpsFileStorageModuleFiles) {
      const file = await spsFileStorageFileApi.fetch.findById({
        id: metadataToSpsFileStorageModuleFile.spsFileStorageModuleFileId,
      });

      const fileUrl = `${BACKEND_URL}${file.file}`;

      if (metadataToSpsFileStorageModuleFile.type === "icon") {
        icons.push({
          url: fileUrl,
        });

        continue;
      }

      image = fileUrl;
    }
  }

  return {
    title: primaryMetadata?.title || "Title",
    description: primaryMetadata?.description || "Description",
    openGraph: {
      title: primaryMetadata?.opengraphTitle || primaryMetadata?.title,
      description:
        primaryMetadata?.opengraphDescription || primaryMetadata?.description,
      type: primaryMetadata?.opengraphType || "website",
      url: HOST_URL,
      image,
    },
    twitter: {
      title: primaryMetadata?.twitterTitle || primaryMetadata?.title,
      description:
        primaryMetadata?.twitterDescription || primaryMetadata?.description,
      image,
    },
    keywords: primaryMetadata?.keywords || [],
    url: HOST_URL,
    image,
    icons,
  } as Metadata;
}
