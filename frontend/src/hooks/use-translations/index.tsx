"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useCallback, useEffect } from "react";

export default function useTranslations() {
  const params = useParams();
  const [translations, setTranslations] = useState();

  useEffect(() => {
    if (params?.locale) {
      try {
        import(`../../../translations/${params.locale}.json`).then((res) => {
          setTranslations(res);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [params?.locale]);

  const translate = useCallback(
    (key: string) => {
      if (translations && translations[key]) {
        return translations[key];
      }

      return key;
    },
    [translations],
  );

  return translate;
}
