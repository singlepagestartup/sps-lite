import { FC } from "react";
import { IForm, IMedia } from "types";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import FourColumnsSimple from "./FourColumnsSimple";
import FourColumnWithCompanyMission from "./FourColumnWithCompanyMission";
import FourColumnsSimpleDark from "./FourColunsSimpleDark";

export interface IFooter {
  id: number;
  logo: IMedia;
  socialNetworksButtons?: IButtonsArray[];
  buttonsArrays?: IButtonsArray[];
  policiesButtons?: IButtonsArray[];
  copyrights?: string;
  variant: keyof typeof variants;
  privacyPolicy?: string[];
  description?: string;
  form?: IForm;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale: string;
  _meta?: any;
}

const variants = {
  "four-columns-simple": FourColumnsSimple,
  "four-columns-simple-dark": FourColumnsSimpleDark,
  "four-columns-with-company-mission": FourColumnWithCompanyMission,
};

export default function Footers(props: IFooter) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IFooter>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
