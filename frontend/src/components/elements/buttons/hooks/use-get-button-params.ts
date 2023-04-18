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
    if (pathname?.includes(`[`) && props.url && [`?`].includes(props.url[0])) {
      return `${pathname}${props.url}`.replace(`//`, `/`);
    }

    return props.url;
  }, [pathname, props.url]);

  return { additionalAttributes, isActive, url };
}
