import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import Flyouts from "~components/flyouts";
import Buttons from "..";
import getFileUrl from "~utils/api/get-file-url";
import Image from "next/image";

export default function Secondary(props: ISpsLiteButton) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

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
        <Flyouts {...props.flyout}>
          <Buttons {...props} flyout={null} onClick={null} url={null} />
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
        <Link
          {...additionalAttributes}
          href={url}
          className="button-text"
          aria-selected={isActive}
        >
          {props.media?.length ? (
            <div className="icon-container">
              <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
            </div>
          ) : null}
          {props.title}
        </Link>
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
