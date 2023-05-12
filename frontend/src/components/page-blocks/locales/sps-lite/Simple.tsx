import { ISpsLiteLocalesBlock } from ".";
import Buttons from "~components/elements/buttons";

export default function Simple(props: ISpsLiteLocalesBlock) {
  return (
    <div
      data-page-block={props.__component}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="flex flex-col gap-2 py-2">
        {props.buttons?.map((button, index) => {
          return <Buttons key={index} {...button} />;
        })}
      </div>
    </div>
  );
}
