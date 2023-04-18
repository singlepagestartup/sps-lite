import { useState } from "react";
import { useCallback, useEffect } from "react";

/**
 * Хук для получения переводов на основе ключей в файлах локализации
 */
export default function useTranslations() {
  const locale = `en`;
  const [translations, setTranslations] = useState();

  useEffect(() => {
    try {
      import(`../../../translations/${locale}.json`).then((res) => {
        setTranslations(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, [locale]);

  const translate = useCallback(
    (key: string) => {
      if (translations && translations[key]) {
        return translations[key];
      }

      return key;
    },
    [translations]
  );

  return translate;
}
