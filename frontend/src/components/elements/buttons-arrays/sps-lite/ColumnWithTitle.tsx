import Buttons from "~components/elements/buttons";
import { IButtonsArray } from ".";

export default function ColumnWithTitle(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <div className={props?.className || ""}>
      <div className="flex flex-col gap-2 relative">
        {title ? (
          <div className="relative inline-flex text-sm w-full leading-relaxed opacity-50 uppercase">
            {title}
          </div>
        ) : null}

        <div className="w-full">
          <div className="w-full items-start flex flex-col gap-2">
            {buttons?.map((button, index) => {
              return <Buttons key={index} {...button} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
