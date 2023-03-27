import { FC } from "react";
import { IForm, IMedia, IPageProps } from "types";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import FourColumnsSimple from "./FourColumnsSimple";
import FourColumnWithCompanyMission from "./FourColumnWithCompanyMission";
import FourColumnsSimpleDark from "./FourColunsSimpleDark";

export interface IFooter {
  logo: IMedia;
  socialNetworksButtons: IButtonsArray[];
  buttonsArrays: IButtonsArray[];
  policiesButtons: IButtonsArray[];
  copyrights: string;
  variant: `four-columns-simple`;
  privacyPolicy: string[];
  description: string;
  form?: IForm;
}

const variants = {
  "four-columns-simple": FourColumnsSimple,
  "four-columns-simple-dark": FourColumnsSimpleDark,
  "four-columns-with-company-mission": FourColumnWithCompanyMission,
};

export default function Footers(props: IPageProps) {
  const Comp = variants[
    props.footer.variant as keyof typeof variants
  ] as FC<IFooter>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props.footer} />;
}
