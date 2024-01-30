import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import { IPageBlock, IPageBlockExtended } from "..";

export const variants = {
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function SpsLite(props: IPageBlock | IPageBlockExtended) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
