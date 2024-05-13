"use server";
import "server-only";

import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";
import { Component } from "@sps/sps-website-builder-models-page-frontend-component";
import { headers } from "next/headers";
import QueryString from "qs";

export async function generateStaticParams() {
  return api.fetch.getUrls();
}

export async function generateMetadata(props: any) {
  return api.fetch.generateMetadata(props);
}

export async function Page(params: {
  params: { url?: string | string[]; locale: string | string[] };
  searchParams?: { [key: string]: any };
}) {
  const headersList = headers();
  const query = headersList.get("x-sps-website-builder-query") || "";
  const parsedQuery = QueryString.parse(query);

  return (
    <Component
      isServer={true}
      isEditing={parsedQuery.edit === "true"}
      params={{
        ...params.params,
      }}
    />
  );
}
