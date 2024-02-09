"use server";
import "server-only";

import { api } from "../../../models/page/api/server";
import { Component } from "../../../models/page/component";

export async function generateStaticParams() {
  return api.getUrls();
}

export async function generateMetadata(props: any) {
  return api.generateMetadata(props);
}

export async function Page(props: any) {
  return <Component isServer={true} {...props} />;
}
