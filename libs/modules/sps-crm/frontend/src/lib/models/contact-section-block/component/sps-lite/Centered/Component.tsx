import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";
import { createNotification } from "@sps/ui-adapter";
import { Component as Form } from "../../../../form/component";

export function Component(props: IComponentPropsExtended) {
  function successCallbackAction() {
    createNotification({
      title: "Form was successfully submitted",
      className: "",
      duration: 5000,
    });
  }

  return (
    <div className="relative mx-auto max-w-xl overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        {props.title ? (
          <ReactMarkdown className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </ReactMarkdown>
        ) : null}
        {props.description ? (
          <ReactMarkdown className="mt-4 text-lg leading-6 text-gray-500">
            {props.description}
          </ReactMarkdown>
        ) : null}
      </div>
      <div className="mt-12">
        {props.form ? <Form isServer={false} {...props.form} /> : null}
      </div>
    </div>
  );
}
