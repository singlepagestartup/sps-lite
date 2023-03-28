import Head from "next/head";
import { useMemo } from "react";
import { IMedia } from "types";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import utils from "@rogwild/next-utils";

export interface IMeta {
  title?: string;
  description?: string;
  favicon?: IMedia;
  image?: IMedia;
  domain?: string;
  gtmKey?: string;
  script?: string;
}

export default function MetaBlock(props: IMeta) {
  const favicon = useMemo(() => {
    if (props?.favicon) {
      return getImageUrl(props.favicon, { BACKEND_URL });
    }

    return `/images/favicon.svg`;
  }, [props]);

  const image = useMemo(() => {
    if (props?.image) {
      return getImageUrl(props.image, { BACKEND_URL });
    }

    return `/images/favicon.svg`;
  }, [props]);

  return (
    <Head>
      <title className="text-base text-green-400">
        {`${props?.title || `SPS`} | ${props?.description || ``}`}
      </title>
      <meta name="description" content={props?.description || ``} />
      <link rel="icon" href={favicon} />
      <meta name="title" content={props?.title || `SPS`} />
      <meta name="description" content={props?.description || ``} />
      <meta name="image" content={image} />
      <meta name="url" content={props?.domain || ``} />
      {/* <meta property="og:site_name" content={props.title} />
        <meta property="og:title" content={seoBlock.ogTitle} />
        <meta property="og:description" content={seoBlock.ogDescription} />
        <meta property="og:url" content={seoBlock.url} />
        <meta property="og:image" content={seoBlock.ogImage} />
        <meta name="twitter:card" content={seoBlock.twitterCard} />
        <meta name="twitter:title" content={seoBlock.twitterTitle} />
        <meta name="twitter:description" content={seoBlock.twitterDescription} />
        <meta name="twitter:url" content={seoBlock.url} />
        <meta name="twitter:image" content={seoBlock.twitterImage} /> */}
      {props?.script ? <script>{props.script}</script> : null}
    </Head>
  );
}
