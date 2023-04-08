import Head from "next/head";
import { useMemo } from "react";
const { getImageUrl } = utils.api;
import { BACKEND_URL } from "~utils/envs";
import utils from "@rogwild/next-utils";
import { ISpsLiteBackendMetatag } from "types/collection-types/sps-lite";

export interface ISpsLiteMetatag extends ISpsLiteBackendMetatag {}

export default function Meta(props: ISpsLiteMetatag) {
  const favicon = useMemo(() => {
    if (props?.favicon) {
      return getImageUrl(props.favicon, { BACKEND_URL });
    }

    return `/images/favicon.svg`;
  }, [props]);

  // const image = useMemo(() => {
  //   if (props?.image) {
  //     return getImageUrl(props.image, { BACKEND_URL });
  //   }

  //   return `/images/favicon.svg`;
  // }, [props]);

  return (
    <Head>
      <title className="text-base text-green-400">
        {`${props?.title || `Single Page Startup`} | ${
          props?.description || ``
        }`}
      </title>
      <meta name="description" content={props?.description || ``} />
      <link rel="icon" href={favicon} />
      <meta name="title" content={props?.title || `SPS`} />
      <meta name="description" content={props?.description || ``} />
      {/* <meta name="image" content={image} /> */}
      {/* <meta name="url" content={props?.domain || ``} /> */}
      {props?.script ? <script>{props.script}</script> : null}
    </Head>
  );
}
