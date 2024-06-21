import { IComponentProps } from "./interface";
import { cn } from "@sps/shared-frontend-utils-client";

export function App(props: IComponentProps) {
  return (
    <div
      data-module="startup"
      className={cn("w-full flex flex-col", props.className)}
    >
      <div className="p-3">
        <div className="p-20 bg-dotted flex items-center justify-center font-bold rounded-lg">
          <div className="flex px-6 py-3 w-fit bg-white rounded-md">
            Startup App
          </div>
        </div>
      </div>
    </div>
  );
}
