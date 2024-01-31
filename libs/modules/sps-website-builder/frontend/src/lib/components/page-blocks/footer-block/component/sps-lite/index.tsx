import FourColumnsWithCompanyMission from "./FourColumnsWithCompanyMission";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  "four-columns-with-company-mission": FourColumnsWithCompanyMission,
};

export default function SpsLite(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
