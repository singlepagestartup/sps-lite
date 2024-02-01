import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/hero-section-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/hero-section-block/interfaces";
import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";

export interface IComponentProps extends IComponent, IPage {
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IComponentExtended {
  showSkeletons?: boolean;
}
