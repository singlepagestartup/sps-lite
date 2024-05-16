import React from "react";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer-block"
      data-variant={props.variant}
      className={`w-full ${props.data.className || "bg-white pb-4 pt-12 px-4 lg:pb-6 lg:pt-16 lg:px-2"}`}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-4 justify-end gap-12">
          <div className="items-center justify-center">
            <p className="text-xl font-bold">Single Page Startup</p>
          </div>
          <div className="flex flex-col col-span-2 col-start-3 lg:grid lg:grid-cols-3 gap-6">
            {["Buttons Array 1", "Buttons Array 2", "Buttons Array 3"].map(
              (buttonsArray, bAIndex) => {
                return (
                  <div
                    key={bAIndex}
                    className="flex flex-col items-start gap-6"
                  >
                    <p>{buttonsArray}</p>
                    <div className="flex flex-col gap-3">
                      {["Link 1", "Link 2", "Link 3"].map((button, index) => {
                        return (
                          <button key={index} className="w-fit">
                            {button}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="w-full h-px bg-gray-400"></div>
        <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <p>Copyrights</p>
          </div>
          <div className="flex items-center flex-wrap gap-4">
            {["Link 1", "Link 2", "Link 3"].map((button, index) => {
              return (
                <button key={index} className="">
                  {button}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
