"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ButtonHTMLAttributes, useMemo } from "react";

export function useGetButtonParams(props: {
  additionalAttributes?: any;
  url?: string | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryEntries = searchParams?.entries();

  const isActive = useMemo(() => {
    if (!props.url) {
      return;
    }

    return pathname === `${props.url}/`;
  }, [pathname, props.url]);

  const additionalAttributes: ButtonHTMLAttributes<HTMLButtonElement> =
    useMemo(() => {
      if (!props.additionalAttributes) {
        return {};
      }

      return { ...props.additionalAttributes };
    }, [props]);

  const url = useMemo(() => {
    if (!props.url) {
      return;
    }

    const nextLinkUrl: {
      pathname: string | undefined;
      query?: string | { [key: string]: string };
    } = {
      pathname: props.url?.includes("http")
        ? props.url
        : props.url?.split("?")[0],
    };

    if (pathname && !nextLinkUrl.pathname) {
      nextLinkUrl.pathname = pathname;
    }

    if (props.url?.includes("?")) {
      if (props.url?.includes("http")) {
        nextLinkUrl.query = "";
      } else {
        const resultQuery: { [key: string]: string } = {};

        const newQueryString = props.url?.split("?")[1];
        const newQueryArray = newQueryString
          .split(/[&|=]+/g)
          ?.reduce((prev, item, index) => {
            if (index % 2 === 0) {
              return [...prev, [item]];
            } else {
              return prev.map((arrItem: any, index: number) => {
                if (index === prev.length - 1) {
                  return [...arrItem, item];
                }

                return arrItem;
              });
            }
          }, [] as string[]);

        for (const newQuery of newQueryArray) {
          const [newQueryKey, newQueryValue] = newQuery;

          resultQuery[newQueryKey] = newQueryValue;
        }

        if (queryEntries) {
          for (const queryEntry of queryEntries) {
            const [queryEntriesKey, queryEntriesValue] = queryEntry;
            if (!resultQuery[queryEntriesKey]) {
              resultQuery[queryEntriesKey] = queryEntriesValue;
            }
          }
        }

        nextLinkUrl.query = resultQuery;
      }
    }

    return nextLinkUrl;
  }, [pathname, queryEntries, props.url]);

  return { additionalAttributes, isActive, url };
}
