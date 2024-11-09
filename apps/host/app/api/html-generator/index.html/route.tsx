import { HOST_URL } from "@sps/shared-utils";
import { NextRequest, NextResponse } from "next/server";
import QueryString from "qs";
import { Component } from "./component";
import { Html, render } from "@react-email/components";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl;
    const params = searchParams.toString();
    const parsedParams = QueryString.parse(params);

    if (!HOST_URL) {
      throw new Error("Host URL not found");
    }

    const html = await render(
      <Html
        lang={
          parsedParams?.lang && typeof parsedParams.lang === "string"
            ? parsedParams.lang
            : "en"
        }
      >
        {parsedParams.variant && typeof parsedParams.variant === "string" ? (
          <Component
            variant={parsedParams.variant as any}
            {...(parsedParams as any)}
          />
        ) : null}
      </Html>,
      {
        pretty: true,
      },
    );

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
      },
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
