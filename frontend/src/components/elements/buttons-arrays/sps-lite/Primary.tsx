import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { IButtonsArray } from ".";

export default function Primary(props: IButtonsArray) {
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
