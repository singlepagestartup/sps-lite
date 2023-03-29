import { FC } from "react";
import { IMedia } from "types";
import { IBackendForm } from "types/models";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import SplitBrandPanel from "./SplitBrandPanel";

export interface IContactSectonBlock {
  variant: keyof typeof variants;
  title?: string;
  description?: string;
  media?: IMedia;
  form?: IBackendForm;
  buttonsArrays?: IButtonsArray[];
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
