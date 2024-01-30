import { Element as Button } from "../../../../button/component";
import Image from "next/image";
import { getFileUrl } from "@sps/utils";
import { IElementExtended } from "../..";

export default function Component(props: IElementExtended) {
  const { title, buttons } = props;

  return (
    <div
      data-component="elements.buttons-array"
      data-variant={props.variant}
      className={props?.className || ""}
    >
      <div className="buttons-array-column-with-title">
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
            return <Button key={index} {...button} />;
          })}
        </div>
      </div>
    </div>
  );
}
