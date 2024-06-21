"use client";

import { forwardRef, useEffect, useMemo, useState } from "react";
import SpsAdminButton, {
  IComponentProps as ISpsAdminButtonComponentProps,
} from "./sps-admin";
import Shadcn, { Props as ShadcnProps } from "./shadcn";
import { useGetButtonParams } from "@sps/shared-hooks";
import Link from "next/link";

export type Props =
  | ({
      ui: "sps-admin";
      url?: string;
      scroll?: boolean;
    } & ISpsAdminButtonComponentProps)
  | ({
      ui: "shadcn";
      url?: string;
      scroll?: boolean;
    } & ShadcnProps);

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

  if (props.ui === "sps-admin") {
    return (
      <SpsAdminButton
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
      </SpsAdminButton>
    );
  }

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
});

export default Button;
