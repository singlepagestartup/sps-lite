"use client";

import Link from "next/link";
import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "../../interface";
import { useMemo } from "react";
import { Component as Flyout } from "../../../../flyout/component";
import { useGetButtonParams } from "@sps/hooks";

export function Component(props: IComponentPropsExtended) {
  // Bug https://github.com/vercel/next.js/issues/58788 that trigger rerender and cause infinite loop
  // PR is opened https://github.com/vercel/next.js/pull/60708
  // const params = useParams();
  // const currentLocale = useMemo(() => {
  //   // return !Array.isArray(params.locale) ? params.locale.toUpperCase() : "";
  // }, []);

  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  // Bug with Next.js Link component and hash links
  // https://github.com/vercel/next.js/issues/44295
  const [Comp, urlPrepared] = useMemo(() => {
    return url?.pathname?.includes("#")
      ? ["a", `${url.pathname}${url?.query ? `?${url.query}` : ""}`]
      : [Link, url];
  }, [JSON.stringify(url)]);

  if (props.flyout) {
    return (
      <Flyout isServer={false} {...props.flyout}>
        <Button
          ui="shadcn"
          data-component="elements.button"
          variant={props.variant ?? "default"}
          {...additionalAttributes}
        >
          {props.title}
        </Button>
      </Flyout>
    );
  }

  if (props.url) {
    return (
      <Button
        ui="shadcn"
        data-component="elements.button"
        variant={props.variant}
        {...additionalAttributes}
        asChild={true}
      >
        <Comp href={urlPrepared}>{props.title}</Comp>
      </Button>
    );
  }

  return (
    <Button
      ui="shadcn"
      data-component="elements.button"
      variant={props.variant}
      {...additionalAttributes}
    >
      {props.title}
    </Button>
  );
}
