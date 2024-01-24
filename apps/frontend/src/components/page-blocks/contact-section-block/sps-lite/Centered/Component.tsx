"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Form from "~components/form";
import { createNotification } from "~components/notification";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
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
        {props.form ? (
          <Form {...props.form} successCallback={successCallbackAction} />
        ) : null}
      </div>
    </div>
  );
}
