"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ISpsLiteContactSectonBlock } from ".";
import Forms from "~components/forms";
import { createNotification } from "~components/notifications";

export default function Centered(props: ISpsLiteContactSectonBlock) {
  function successCallbackAction() {
    createNotification({
      title: "Form was successfully submitted",
      className: "",
      duration: 5000,
    });
  }

  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${
        props.className || ""
      } overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24`}
    >
      <div className="relative mx-auto max-w-xl">
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
            <Forms {...props.form} successCallback={successCallbackAction} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
