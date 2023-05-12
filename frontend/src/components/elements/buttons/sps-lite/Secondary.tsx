import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import Flyouts from "~components/flyouts";
import Buttons from "..";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";

export default function Secondary(props: ISpsLiteButton) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

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
        className={props?.className || ""}
      >
        <Link
          {...additionalAttributes}
          href={url}
          aria-selected={isActive}
          className="button-secondary"
        >
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
        </Link>
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
