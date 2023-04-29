"use client";

import { useEffect, useState } from "react";
import Layouts from "~components/layouts";
import { getBackendData } from "~utils/api";
import { pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export default async function GlobalError({ error, reset }: any) {
  const [page, setPage] = useState<any>();
  useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  useEffect(() => {
    getBackendData({
      url: `${BACKEND_URL}/api/pages`,
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
    return <Layouts {...page} />;
  }

  return (
    <div>
      <p className="text-sm">{error?.message}</p>
    </div>
  );
}
