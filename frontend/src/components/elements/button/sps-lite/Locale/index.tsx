import useGetButtonParams from "~hooks/use-get-button-params";
import Flyouts from "~components/flyout";
import Button, { IElement } from "../..";
import { useParams } from "next/navigation";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";

export default function Locale(props: IElement) {
  const params = useParams();
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  if (props.onClick) {
    return (
      <div
        data-component="elements.button"
        data-variant={props.variant}
        className={`button ${props?.className || ""}`}
      >
        <button
          className="button-locale"
          {...additionalAttributes}
          onClick={props.onClick}
        >
          {props.children ? props.children : null}
          {props.media?.length ? (
            <div className="icon-container">
              <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
            </div>
          ) : null}
          {props.title || `${params?.locale || ""}`}
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
          <Button
            {...props}
            title={props.title || `${params?.locale || ""}`}
            flyout={null}
            onClick={null}
            url={null}
          />
        </Flyouts>
      </div>
    );
  }

  return (
    <div
      data-component="elements.button"
      data-variant={props.variant}
      className={`button ${props?.className || ""}`}
    >
      <button className="button-locale" {...additionalAttributes}>
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
