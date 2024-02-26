"use client";

import { useEffect, useState } from "react";
import { BACKEND_URL, getBackendData } from "@sps/shared-frontend-utils-client";
import { populate as pagePopulate } from "@sps/sps-website-builder-models-page-contracts";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";

export function GlobalError({ error, reset, fonts }: any) {
  const [page, setPage] = useState<any>();
  useEffect(() => {
    console.error("GlobalError error:", error);
  }, [error]);

  useEffect(() => {
    getBackendData({
      url: `${BACKEND_URL}/api/sps-website-builder/pages`,
      params: {
        populate: pagePopulate,
        filters: {
          url: "/500",
        },
      },
    }).then((res) => {
      if (res?.length) {
        setPage(res[0]);
      }
    });
  }, []);

  if (page) {
    return (
      <html className="scroll-smooth">
        <body
          className={`${fonts.defaultFont.variable} ${fonts.primaryFont.variable}`}
        >
          <div className="relative">
            <Layout {...page} />
          </div>
        </body>
      </html>
    );
  }

  return (
    <html>
      <body>
        <div>
          <p className="text-sm">{error?.message}</p>
        </div>
      </body>
    </html>
  );
}
