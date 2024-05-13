"use client";

import { forwardRef, useEffect, useMemo, useState } from "react";
import Sps, { Props as SpsProps } from "./sps";
import Shadcn, { Props as ShadcnProps } from "./shadcn";
import { useGetButtonParams } from "@sps/hooks";
import Link from "next/link";

export type Props =
  | ({
      ui: "shadcn";
      url?: string;
    } & ShadcnProps)
  | ({
      ui: "sps";
      url?: string;
    } & Omit<SpsProps, "data-ui">);

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const [passChildren, setPassChildren] = useState<
    React.ReactNode | string | undefined
  >(props.children);

  const { isActive, additionalAttributes, url } = useGetButtonParams({
    url: props?.url,
  });

  const [Comp, urlPrepared] = useMemo(() => {
    if (url?.pathname) {
      return url?.pathname?.includes("#")
        ? ["a", `${url.pathname}${url?.query ? `?${url.query}` : ""}`]
        : [Link, url];
    }

    return ["button", ""];
  }, [props.url]);

  useEffect(() => {
    if (urlPrepared) {
      setPassChildren(
        <Link
          scroll={"scroll" in props ? props.scroll : true}
          href={urlPrepared}
        >
          {props.children}
        </Link>,
      );
    } else {
      setPassChildren(props.children);
    }
  }, [Comp, urlPrepared, props.children]);

  if (props.ui === "shadcn") {
    return (
      <Shadcn
        {...props}
        ref={ref}
        {...(passChildren && typeof passChildren !== "string"
          ? { asChild: true }
          : {})}
        {...additionalAttributes}
        {...(isActive ? { "data-active": true } : {})}
        data-ui="button"
      >
        {passChildren}
      </Shadcn>
    );
  }

  return (
    <Sps
      {...props}
      ref={ref}
      {...additionalAttributes}
      {...(isActive ? { "data-active": true } : {})}
      data-ui="button"
    >
      {passChildren}
    </Sps>
  );
});

export default Button;
