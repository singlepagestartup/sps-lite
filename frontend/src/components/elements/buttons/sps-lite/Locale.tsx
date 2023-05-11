import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";
import FlyoutMenus from "~components/flyout-menus";
import Buttons from "..";
import { useParams } from "next/navigation";

export default function Locale(props: ISpsLiteButton) {
  const params = useParams();
  const { isActive, additionalAttributes, url } = useGetButtonParams(props);

  if (props.onClick) {
    return (
      <div className={props?.className || ""}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-locale"
        >
          {props.title || `${params?.locale || ""}`}
        </button>
      </div>
    );
  }

  if (props.flyoutMenu) {
    return (
      <div className={props?.className || ""}>
        <FlyoutMenus {...props.flyoutMenu}>
          <Buttons
            {...props}
            title={props.title || `${params?.locale || ""}`}
            flyoutMenu={null}
            onClick={null}
            url={null}
          />
        </FlyoutMenus>
      </div>
    );
  }

  return (
    <div className={props?.className || ""}>
      <button {...additionalAttributes} className="button-locale">
        {props.title}
      </button>
    </div>
  );
}
