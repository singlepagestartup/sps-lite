import type { IModel as IParentModel } from "@sps/sps-website-builder-models-faq-block-contracts";
import type { IModel as IFaq } from "@sps/sps-website-builder-models-faq-contracts";

export interface IModel extends IParentModel {
  faqs?: IFaq[] | null;
}
