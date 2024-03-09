"use server";
import "server-only";

import { api } from "@sps/sps-website-builder-models-page-frontend-api";
import { Component } from "@sps/sps-website-builder-models-page-frontend-component";

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
  return (
    <Component
      isServer={true}
      params={{
        ...params.params,
      }}
    />
  );
}
