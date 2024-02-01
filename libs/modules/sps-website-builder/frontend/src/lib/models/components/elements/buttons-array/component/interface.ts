import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/buttons-array/interfaces";

export interface IComponentProps extends IComponent {
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IComponentExtended {}
