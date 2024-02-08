import ReactMarkdown from "react-markdown";
import { Component as ButtonArrays } from "../../../../buttons-array/component";
import { Component as Logotype } from "../../../../logotype/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <footer className="bg-white mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 w-full lg:w-3/12">
          {props.logotype ? (
            <Logotype
              isServer={props.isServer}
              {...props.logotype}
              variant="default"
            />
          ) : null}
          <div className="lg:max-w-xs">
            {props.description ? (
              <ReactMarkdown className="text-xs text-gray-300">
                {props.description}
              </ReactMarkdown>
            ) : null}
          </div>
          <div className="w-full flex gap-4">
            {props.extraButtonsArrays?.map((buttonsArray, index) => {
              return (
                <ButtonArrays
                  isServer={props.isServer}
                  key={index}
                  {...buttonsArray}
                />
              );
            })}
          </div>
        </div>
        <div className="flex lg:justify-end w-full lg:w-9/12 gap-4">
          {props.buttonsArrays?.map((buttonsArray, index) => {
            return (
              <div key={index} className="w-6/12 lg:w-3/12">
                <ButtonArrays isServer={props.isServer} {...buttonsArray} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 lg:pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {props.copyrights ? (
          <ReactMarkdown className="text-sm text-gray-500">
            {props.copyrights}
          </ReactMarkdown>
        ) : null}
        {props.additionalButtonsArrays?.map((buttonsArray, index) => {
          return (
            <ButtonArrays
              isServer={props.isServer}
              key={index}
              {...buttonsArray}
            />
          );
        })}
      </div>
    </footer>
  );
}
