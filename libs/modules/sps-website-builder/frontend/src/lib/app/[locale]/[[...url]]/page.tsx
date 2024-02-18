"use server";
import "server-only";

import { api } from "@sps/sps-website-builder-page-api";
import { Component } from "@sps/sps-website-builder-page-component";

export async function generateStaticParams() {
  return api.server.getUrls();
}

export async function generateMetadata(props: any) {
  return api.server.generateMetadata(props);
}

export async function Page(props: any) {
  return <Component isServer={true} {...props} />;
}
