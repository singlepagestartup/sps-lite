import Buttons from "~components/elements/buttons";
import { IButtonsArray } from ".";

export default function Row(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <div className={props?.className || ""}>
      <div className="flex flex-col gap-2 relative">
        <div className="w-full">
          <div className="w-full flex gap-4">
            {buttons?.map((button, index) => {
              return <Buttons key={index} {...button} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
