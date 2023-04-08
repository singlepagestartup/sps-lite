import { useRouter } from "next/router";
import { useMemo } from "react";

export default function useGetButtonParams(props: {
  additionalAttributes?: any;
  url?: string | null;
}) {
  const router = useRouter();

  const isActive = useMemo(() => {
    if (!props.url) {
      return;
    }

    return router.asPath.replace(`/`, ``) === props.url;
  }, [router, props.url]);

  const additionalAttributes = useMemo(() => {
    if (!props.additionalAttributes) {
      return {};
    }

    return { ...props.additionalAttributes };
  }, [props]);

  const url = useMemo(() => {
    if (
      router.pathname.includes(`[`) &&
      props.url &&
      [`?`].includes(props.url[0])
    ) {
      return `${router.asPath}${props.url}`.replace(`//`, `/`);
    }

    return props.url;
  }, [router, props.url]);

  return { additionalAttributes, isActive, url };
}
