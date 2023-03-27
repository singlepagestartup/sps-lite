import { IButtonsArray } from "types";
import SimpleButtons from "../simple-buttons";

export default function Simple(props: IButtonsArray) {
  const { title, buttons } = props;

  return (
    <div className={props.className}>
      <div className="flex flex-col gap-2 relative">
        {title ? (
          <div
            className={`inline-flex items-center border-b-2 p-1 text-sm font-medium border-primary-500 text-gray-900`}
          >
            <span>{title}</span>
          </div>
        ) : null}

        <div className="overflow-hidden w-full">
          <div className="w-full flex flex-col gap-2">
            {buttons?.map((button, index) => {
              return <SimpleButtons key={index} {...button} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
