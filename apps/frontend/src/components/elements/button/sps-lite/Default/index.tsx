import Link from "next/link";
import useGetButtonParams from "../../../../../hooks/use-get-button-params";
import { Button } from "@sps/ui-adapter";
import { IElement } from "../..";
import { useMemo } from "react";
import Flyout from "../../../../flyout";

export default function Default(props: IElement) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  // Bug with Next.js Link component and hash links
  // https://github.com/vercel/next.js/issues/44295
  const [Comp, urlPrepared] = useMemo(() => {
    return url?.pathname?.includes("#")
      ? ["a", `${url.pathname}${url?.query ? `?${url.query}` : ""}`]
      : [Link, url];
  }, [url]);

  // if (props.onClick) {
  //   return (
  //     <Button
  //       variant={props.variant}
  //       onClick={props.onClick}
  //       {...additionalAttributes}
  //     >
  //       {props.title}
  //     </Button>
  //   );
  // }

  if (props.flyout) {
    return (
      <Flyout flyout={props.flyout}>
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
