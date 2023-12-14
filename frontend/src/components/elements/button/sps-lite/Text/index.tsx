import Link from "next/link";
import useGetButtonParams from "~hooks/use-get-button-params";
import Flyouts from "~components/flyout";
import Button, { IElement } from "../..";
import getFileUrl from "~utils/api/get-file-url";
import Image from "next/image";
import { useMemo } from "react";

export default function Text(props: IElement) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

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
        className={`button ${props?.className || ""}`}
      >
        <button
          {...additionalAttributes}
          className="button-text"
          onClick={props.onClick}
        >
          {props.children ? props.children : null}
          {props.media?.length ? (
            <div className="icon-container">
              <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
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
        className={`button ${props?.className || ""}`}
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
        className={`button ${props?.className || ""}`}
      >
        <Comp
          {...additionalAttributes}
          href={urlPrepared}
          className="button-text"
          aria-selected={isActive}
        >
          {props.children ? props.children : null}
          {props.media?.length ? (
            <div className="icon-container">
              <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
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
      className={`button ${props?.className || ""}`}
    >
      <button {...additionalAttributes} className="button-text">
        {props.children ? props.children : null}
        {props.media?.length ? (
          <div className="icon-container">
            <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
          </div>
        ) : null}
        {props.title}
      </button>
    </div>
  );
}
