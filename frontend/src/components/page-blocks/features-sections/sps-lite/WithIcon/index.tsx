import Image from "next/image";
import { useMemo } from "react";
import { ISpsLiteFeaturesSectionBlock } from "..";
import getFileUrl from "~utils/api/get-file-url";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Component from "./Component";
import Error from "./Error";
import { ErrorBoundary } from "@sentry/nextjs";

export default function WithIcon(props: ISpsLiteFeaturesSectionBlock) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${props.className || ""}`}
      {...additionalAttributes}
    >
      <ErrorBoundary fallback={Error}>
        <Component {...props} />
      </ErrorBoundary>
    </div>
  );
}
