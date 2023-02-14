import { FC } from "react";
import { IFooter, IPageProps } from "types";
import FourColumnsSimple from "./FourColumnsSimple";
import FourColumnWithCompanyMission from "./FourColumnWithCompanyMission";
import FourColumnsSimpleDark from "./FourColunsSimpleDark";

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
