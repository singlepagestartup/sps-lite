import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import FlyoutMenus from "~components/flyout-menus";
import Buttons from "..";
import getFileUrl from "~utils/api/get-file-url";
import Image from "next/image";

export default function Secondary(props: ISpsLiteButton) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  if (props.onClick) {
    return (
      <div className={props?.className || ""}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-text"
        >
          {props.title}
        </button>
      </div>
    );
  }

  if (props.flyoutMenu) {
    return (
      <div className={props?.className || ""}>
        <FlyoutMenus {...props.flyoutMenu}>
          <Buttons {...props} flyoutMenu={null} onClick={null} url={null} />
        </FlyoutMenus>
      </div>
    );
  }

  if (url && props.url) {
    return (
      <div className={props?.className || ""}>
        <Link
          {...additionalAttributes}
          href={url}
          aria-selected={isActive}
          className="button-text"
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
    <div className={props?.className || ""}>
      <button {...additionalAttributes} className="button-text">
        {props.title}
      </button>
    </div>
  );
}
