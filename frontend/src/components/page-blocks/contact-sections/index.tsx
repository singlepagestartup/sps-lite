import { FC } from "react";
import { IButtonsArray, IForm, IMedia } from "types";
import SplitBrandPanel from "./SplitBrandPanel";

export interface IContactSecton {
  variant: `split-brand-panel`;
  title?: string;
  description?: string;
  media?: IMedia;
  form?: IForm;
  buttonsArrays?: IButtonsArray[];
  anchor?: string;
}

const variants = {
  "split-brand-panel": SplitBrandPanel,
};

export default function ContactSectons(props: IContactSecton) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IContactSecton>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
