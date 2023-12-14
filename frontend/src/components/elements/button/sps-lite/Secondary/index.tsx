import Link from "next/link";
import useGetButtonParams from "~hooks/use-get-button-params";
import Flyouts from "~components/flyout";
import Button, { IElement } from "../..";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import { useMemo } from "react";

export default function Secondary(props: IElement) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props); //?

  // Bug with Next.js Link component and hash links
  // https://github.com/vercel/next.js/issues/44295
  const [Comp, urlPrepared] = useMemo(() => {
    return url?.pathname?.includes("#")
      ? ["a", `${url.pathname}${url?.query ? `?${url.query}` : ""}`]
      : [Link, url];
  }, [url]);

  if (props.onClick) {
    return (
      <div
        data-component="elements.button"
        data-variant={props.variant}
        className={props?.className || ""}
      >
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-secondary"
        >
          {props.children ? props.children : null}
          {props.media?.length ? (
            <div className="icon__container">
              <Image
                src={getFileUrl(props.media[0])}
                alt=""
                className="object-contain object-center"
                fill={true}
              />
            </div>
          ) : null}
          {props.title}
        </button>
      </div>
    );
  }

  if (props.flyout) {
    return (
      <div
        data-component="elements.button"
        data-variant={props.variant}
        className={props?.className || ""}
      >
        <Flyouts flyout={props.flyout}>
          <Button {...props} flyout={null} onClick={null} url={null} />
        </Flyouts>
      </div>
    );
  }

  if (url && props.url) {
    return (
      <div
        data-component="elements.button"
        data-variant={props.variant}
        className={props?.className || ""}
      >
        <Comp
          {...additionalAttributes}
          href={urlPrepared}
          aria-selected={isActive}
          className="button-secondary"
        >
          {props.children ? props.children : null}
          {props.media?.length ? (
            <div className="icon__container">
              <Image
                src={getFileUrl(props.media[0])}
                alt=""
                className="object-contain object-center"
                fill={true}
              />
            </div>
          ) : null}
          {props.title}
        </Comp>
      </div>
    );
  }

  return (
    <div
      data-component="elements.button"
      data-variant={props.variant}
      className={props?.className || ""}
    >
      <button {...additionalAttributes} className="button-secondary">
        {props.children ? props.children : null}
        {props.media?.length ? (
          <div className="icon__container">
            <Image
              src={getFileUrl(props.media[0])}
              alt=""
              className="object-contain object-center"
              fill={true}
            />
          </div>
        ) : null}
        {props.title}
      </button>
    </div>
  );
}
