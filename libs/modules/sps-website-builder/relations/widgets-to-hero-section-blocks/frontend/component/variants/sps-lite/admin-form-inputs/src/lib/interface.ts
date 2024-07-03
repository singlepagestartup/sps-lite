import { IRelation } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/extended";
import { UseFormReturn } from "react-hook-form";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-form-inputs" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  form: UseFormReturn<any>;
  data?: IRelation;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
