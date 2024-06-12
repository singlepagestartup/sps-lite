"use client";

import { useEffect, useState } from "react";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-server";

export function GlobalError({ error, reset, fonts }: any) {
  const [page, setPage] = useState<any>();
  useEffect(() => {
    console.error("GlobalError error:", error);
  }, [error]);

  useEffect(() => {
    api.fetch
      .find({
        filters: {
          and: [
            {
              column: "url",
              method: "eq",
              value: "/500",
            },
          ],
        },
      })
      .then((pages) => {
        if (pages.length > 0) {
          setPage(pages[0]);
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
