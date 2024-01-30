import Link from "next/link";
import { Button } from "@sps/ui-adapter";
import { IElementExtended } from "../..";
import { useMemo } from "react";
import { Entity as Flyout } from "../../../../../../entities/flyout/component";
import { useParams } from "next/navigation";
import { useGetButtonParams } from "@sps/hooks";

export default function Default(props: IElementExtended) {
  const params = useParams();
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
          variant={props.variant}
          {...additionalAttributes}
        >
          {`${
            !Array.isArray(params.locale) ? params.locale.toUpperCase() : ""
          }`}
        </Button>
      </Flyout>
    );
  }

  if (url && props.url) {
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
