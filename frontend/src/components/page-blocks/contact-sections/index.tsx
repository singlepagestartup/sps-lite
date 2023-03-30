import { FC } from "react";
import { IBackendButtonsArray } from "types/components";
import { IBackendForm, IBackendMedia } from "types/models";
import SplitBrandPanel from "./SplitBrandPanel";

export interface IContactSectonBlock {
  variant: keyof typeof variants;
  title?: string;
  description?: string;
  media?: IBackendMedia;
  form?: IBackendForm;
  buttonsArrays?: IBackendButtonsArray[];
  anchor?: string;
}

const variants = {
  "split-brand-panel": SplitBrandPanel,
};

export default function ContactSectons(props: IContactSectonBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IContactSectonBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
