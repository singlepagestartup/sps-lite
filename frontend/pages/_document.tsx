import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: any) {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="stylesheet" href="/css/calendar.css" />
      </Head>
      <body>
        {props?.__NEXT_DATA__?.props?.pageProps?.meta?.gtmKey ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${props.__NEXT_DATA__.props.pageProps.meta.gtmKey}`}
              height="0"
              width="0"
              style={{ display: `none`, visibility: `hidden` }}
            ></iframe>
          </noscript>
        ) : null}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
