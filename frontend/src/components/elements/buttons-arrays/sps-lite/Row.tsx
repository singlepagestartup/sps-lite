import Buttons from "~components/elements/buttons";
import { IButtonsArray } from ".";
import getFileUrl from "~utils/api/get-file-url";
import Image from "next/image";

export default function Row(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <div
      data-component="elements.buttons-array"
      data-variant={props.variant}
      className={props?.className || ""}
    >
      <div className="buttons-array-row">
        {title ? (
          <div className="buttons-array-title">
            {props.media?.length ? (
              <div className="icon-container">
                <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
              </div>
            ) : null}
            {title}
          </div>
        ) : null}

        <div className="buttons-array-buttons-container">
          {buttons?.map((button, index) => {
            return <Buttons key={index} {...button} />;
          })}
        </div>
      </div>
    </div>
  );
}
