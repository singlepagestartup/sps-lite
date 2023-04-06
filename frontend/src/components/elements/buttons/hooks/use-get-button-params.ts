import { useRouter } from "next/router";
import { useMemo } from "react";

export default function useGetButtonParams(props: {
  additionalAttributes?: any;
  url?: string | null;
}) {
  const router = useRouter();
  const { url } = props;

  const isActive = useMemo(() => {
    if (!url) {
      return;
    }

    return router.asPath.replace(`/`, ``) === url;
  }, [router, url]);

  const additionalAttributes = useMemo(() => {
    if (!props.additionalAttributes) {
      return {};
    }

    return { ...props.additionalAttributes };
  }, [props]);

  return { additionalAttributes, isActive };
}
