import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import { IPageBlock } from "..";

export const variants = {
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
