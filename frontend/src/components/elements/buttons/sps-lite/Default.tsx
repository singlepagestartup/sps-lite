import Link from "next/link";
import useGetButtonParams from "../hooks/use-get-button-params";
import { ISpsLiteButton } from ".";

export default function Default(props: ISpsLiteButton) {
  const { url, title } = props;
  const { isActive, additionalAttributes } = useGetButtonParams(props);

  if (props?.onClick) {
    return (
      <div className={props?.className || ``}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-default"
        >
          {title}
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
          className="button-default"
        >
          {title}
        </Link>
      </div>
    );
  }

  return <></>;
}
