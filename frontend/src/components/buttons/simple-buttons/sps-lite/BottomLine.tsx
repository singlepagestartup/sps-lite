import Link from "next/link";
import { IButton } from "..";
import useGetButtonParams from "../../hooks/use-get-button-params";

export default function BottomLine(props: IButton) {
  const { url, title } = props;
  const { isActive, additionalAttributes } = useGetButtonParams(props);

  if (props?.onClick) {
    return (
      <div className={props?.className || ``}>
        <button
          {...additionalAttributes}
          onClick={props.onClick}
          className="button-bottom-line"
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
          className="button-bottom-line"
        >
          {title}
        </Link>
      </div>
    );
  }

  return <></>;
}
