import Buttons from "~components/elements/buttons";
import { IButtonsArray } from ".";

export default function Simple(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <div className={props?.className || ``}>
      <div className="flex flex-col gap-2 relative">
        {title ? (
          <div
            className={`inline-flex items-center font-medium leading-relaxed justify-center text-center px-8 py-3 text-gray-900`}
          >
            <span>{title}</span>
          </div>
        ) : null}

        <div className="overflow-hidden w-full">
          <div className="w-full flex flex-col gap-2">
            {buttons?.map((button, index) => {
              return <Buttons key={index} {...button} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
