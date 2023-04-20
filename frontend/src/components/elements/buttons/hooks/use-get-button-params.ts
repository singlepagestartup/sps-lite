import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useGetButtonParams(props: {
  additionalAttributes?: any;
  url?: string | null;
}) {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (!props.url) {
      return;
    }

    return pathname?.replace(`/`, ``) === props.url;
  }, [pathname, props.url]);

  const additionalAttributes = useMemo(() => {
    if (!props.additionalAttributes) {
      return {};
    }

    return { ...props.additionalAttributes };
  }, [props]);

  const url = useMemo(() => {
    const nextLinkUrl = {
      pathname: props.url?.includes(`http`)
        ? props.url
        : props.url?.split(`?`)[0],
      query: props.url?.includes(`http`) ? `` : props.url?.split(`?`)[1],
    };

    if (pathname && !nextLinkUrl.pathname) {
      // return `${pathname}${props.url}`.replace(`//`, `/`);
      nextLinkUrl.pathname = pathname;
    }

    return nextLinkUrl;
  }, [pathname, props.url]);

  return { additionalAttributes, isActive, url };
}
