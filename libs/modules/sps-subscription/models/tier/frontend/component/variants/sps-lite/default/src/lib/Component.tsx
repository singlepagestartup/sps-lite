import { IComponentPropsExtended } from "./interface";
import { Component as Attribute } from "@sps/sps-subscription-models-attribute-frontend-component";
import { Button } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-subscription"
      data-model="tier"
      data-variant={props.variant}
      className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
    >
      <div className="p-8 sm:p-10">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
          {props.data.title}
        </h3>
        <div className="mt-4 flex items-baseline">
          {props.data.attributes?.map((attribute, index) => {
            return (
              <Attribute
                key={index}
                isServer={props.isServer}
                variant="price"
                data={attribute}
              />
            );
          })}
          {props?.data.period ? (
            <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
              /mo
            </span>
          ) : null}
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {props.data.description}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
          <div className="flex flex-col space-y-6">
            {props.data.attributes?.map((attribute, index) => {
              return (
                <Attribute
                  key={index}
                  isServer={props.isServer}
                  variant="feature"
                  data={attribute}
                />
              );
            })}
          </div>
          <div className="mt-8">
            <Button
              ui="sps"
              data-ui-variant="primary"
              className="w-full"
              url={`/tiers/${props.data.id}/subscribe`}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
