"use client";

import { useEffect, useState } from "react";
import Layout from "../../../libs/modules/sps-website-builder/frontend/src/lib/components/layout";
import { BACKEND_URL, getBackendData } from "@sps/utils";
import { populate as pagePopulate } from "@sps/sps-website-builder-frontend/lib/redux/entities/page/populate";
import { fonts } from "./fonts";

export default function GlobalError({ error, reset }: any) {
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
