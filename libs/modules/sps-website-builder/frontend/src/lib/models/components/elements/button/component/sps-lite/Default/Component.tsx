"use client";

import Link from "next/link";
import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "../../interface";
import { useEffect, useMemo, useState } from "react";
import { Component as Flyout } from "../../../../../../entities/flyout/component";
import { Component as Loader } from "../../../../../../entities/loader/component";
import { useGetButtonParams } from "@sps/hooks";

export function Component(props: IComponentPropsExtended) {
  const [loader, setLoader] = useState<boolean>(false);
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  useEffect(() => {
    if (loader) {
      console.log(`🚀 ~ useEffect ~ loader:`, loader);
    }
  }, [loader]);

  // Bug with Next.js Link component and hash links
  // https://github.com/vercel/next.js/issues/44295
  const [Comp, urlPrepared] = useMemo(() => {
    return url?.pathname?.includes("#")
      ? ["a", `${url.pathname}${url?.query ? `?${url.query}` : ""}`]
      : [Link, url];
  }, [url]);

  if (props.flyout) {
    return (
      <Flyout {...props.flyout}>
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

  // console.log(`🚀 ~ Component ~ props.title:`, props.title);
  if (props.title === "Destructive") {
    return (
      <Button
        ui="shadcn"
        data-component="elements.button"
        variant={props.variant ?? "default"}
        onClick={() => {
          setLoader((prev) => !prev);
        }}
        {...additionalAttributes}
      >
        {props.title}
        {loader ? <Loader isServer={true} /> : null}
      </Button>
    );
  }

  if (url && props.url) {
    return (
      <Button
        ui="shadcn"
        data-component="elements.button"
        variant={props.variant ?? "default"}
        asChild={true}
        {...additionalAttributes}
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
