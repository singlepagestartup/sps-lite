import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import FlyoutMenus from "~components/flyout-menus";

export default function Primary(props: ISpsLiteButton) {
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  if (props?.onClick) {
    return (
      <div className={props?.className || ``}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-primary"
        >
          {props.title}
        </button>
      </div>
    );
  }

  if (props?.flyoutMenu) {
    return (
      <div className={props?.className || ``}>
        <FlyoutMenus {...props} />
      </div>
    );
  }

  if (url) {
    return (
      <div className={props?.className || ``}>
        <Link
          {...additionalAttributes}
          href={url}
          aria-selected={isActive}
          className={`button-primary`}
        >
          {props.title}
        </Link>
      </div>
    );
  }

  return <></>;
}
