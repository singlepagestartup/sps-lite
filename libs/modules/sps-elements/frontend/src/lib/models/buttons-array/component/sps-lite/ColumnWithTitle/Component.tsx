import { Component as Button } from "../../../../button/component";
import Image from "next/image";
import { getFileUrl } from "@sps/utils";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
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
            return <Button isServer={props.isServer} key={index} {...button} />;
          })}
        </div>
      </div>
    </div>
  );
}
