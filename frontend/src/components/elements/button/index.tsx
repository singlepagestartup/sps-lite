"use client";

import { Props as ButtonProps } from "~components/ui/button";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendComponent } from "~redux/services/backend/components/elements/button/interfaces";

export interface IElement
  extends Omit<ButtonProps, "id" | "title" | "url" | "className">,
    Omit<
      IBackendComponent,
      "id" | "url" | "description" | "additionalAttributes" | "className"
    > {
  id?: number;
  url?: IBackendComponent["url"];
  description?: IBackendComponent["description"];
  additionalAttributes?: IBackendComponent["additionalAttributes"];
  className?: IBackendComponent["className"];
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Button(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
