import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { IPageProps } from "types";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import utils from "@rogwild/next-utils";

export default function MetaBlock(props: IPageProps) {
  const { meta } = props;

  const favicon = useMemo(() => {
    if (meta?.favicon) {
      return getImageUrl(meta.favicon, { BACKEND_URL });
    }

    return `/images/favicon.svg`;
  }, [meta]);

  const image = useMemo(() => {
    if (meta?.image) {
      return getImageUrl(meta.image, { BACKEND_URL });
    }

    return `/images/favicon.svg`;
  }, [meta]);

  return (
    <Head>
      <title className="text-base text-green-400">
        {`${meta?.title || `SPS`} | ${meta?.description || ``}`}
      </title>
      <meta name="description" content={meta?.description || ``} />
      <link rel="icon" href={favicon} />
      <meta name="title" content={meta?.title || `SPS`} />
      <meta name="description" content={meta?.description || ``} />
      <meta name="image" content={image} />
      <meta name="url" content={meta?.domain || ``} />
      {/* <meta property="og:site_name" content={meta.title} />
        <meta property="og:title" content={seoBlock.ogTitle} />
        <meta property="og:description" content={seoBlock.ogDescription} />
        <meta property="og:url" content={seoBlock.url} />
        <meta property="og:image" content={seoBlock.ogImage} />
        <meta name="twitter:card" content={seoBlock.twitterCard} />
        <meta name="twitter:title" content={seoBlock.twitterTitle} />
        <meta name="twitter:description" content={seoBlock.twitterDescription} />
        <meta name="twitter:url" content={seoBlock.url} />
        <meta name="twitter:image" content={seoBlock.twitterImage} /> */}
      {props?.meta?.script ? <script>{props.meta.script}</script> : null}
    </Head>
  );
}
