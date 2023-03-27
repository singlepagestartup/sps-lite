import { useRouter } from "next/router";
import { useMemo } from "react";
import { IButton } from "~components/buttons/simple-buttons";

export default function useGetButtonParams(props: IButton) {
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
