import { HOST_URL } from "@sps/shared-utils";
import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";
import QueryString from "qs";
import { createElement } from "react";

const fontsURLs: {
  [key in "Default"]: {
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    style: "normal" | "italic";
    url: URL;
  }[];
} = {
  Default: [
    {
      weight: 100,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/Thin.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 200,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/ExtraLight.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 300,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/Light.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 400,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/Regular.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 500,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/Medium.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 600,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/SemiBold.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 700,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/Bold.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 800,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/ExtraBold.ttf`,
        import.meta.url,
      ),
    },
    {
      weight: 900,
      style: "normal",
      url: new URL(
        `../../../../styles/fonts/Default/Black.ttf`,
        import.meta.url,
      ),
    },
  ],
};

function Component(props: { id?: string }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        fontFamily: '"Default"',
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div tw="w-full bg-gray-50 flex flex-col">
        <img
          src={new URL("/images/favicon.svg", HOST_URL).href}
          tw="w-10 h-10"
        />
        <h1 tw="text-blue-400 font-normal">Normal: {props.id || "id"}</h1>
        <h1 tw="text-blue-400 font-bold">Bold: {props.id || "id"}</h1>
      </div>
    </div>
  );
}

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const params = searchParams.toString();
    const parsedParams = QueryString.parse(params);

    if (!HOST_URL) {
      throw new Error("Host URL not found");
    }

    const width = parsedParams?.["width"] ? Number(parsedParams["width"]) : 512;
    const height = parsedParams?.["height"]
      ? Number(parsedParams["height"])
      : 512;

    const fonts: {
      name: string;
      data: Buffer | ArrayBuffer;
      style: "normal" | "italic";
      weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    }[] = [];

    for (const fontType of Object.keys(fontsURLs)) {
      for (const fontStyle of fontsURLs[fontType as keyof typeof fontsURLs]) {
        const fontData = await fetch(new URL(fontStyle.url, HOST_URL))
          .then((res) => {
            return res.arrayBuffer();
          })
          .catch((error) => {
            console.error(`fetch font ~ error:`, error);
          });

        if (!fontData) {
          continue;
        }

        fonts.push({
          name: fontType,
          data: fontData,
          style: fontStyle.style,
          weight: fontStyle.weight,
        });
      }
    }

    console.log(`🚀 ~ returnnewImageResponse ~ fonts:`, fonts.length);

    return new ImageResponse(createElement(Component, parsedParams as any), {
      width,
      height,
      fonts,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 404 },
    );
  }
};
