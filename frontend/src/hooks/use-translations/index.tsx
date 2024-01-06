"use client";

import { useParams } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

export default function useTranslations() {
  const params = useParams();
  const [translations, setTranslations] = useState();

  useEffect(() => {
    if (params?.locale) {
      try {
        import(`../../../translations/${params.locale}.json`).then((res) => {
          res; //?
          setTranslations(res);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [params?.locale]);

  translations; //?

  const translate = useCallback(
    (key: string) => {
      key; //?
      translations; //?
      if (translations && translations[key]) {
        return translations[key];
      }

      return key;
    },
    [translations],
  );

  return translate;
}
