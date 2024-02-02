import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/faq-block/interfaces";
import { IModel as IFaq } from "@sps/sps-website-builder-contracts/lib/models/faq/interfaces";

export interface IModel extends IParentModel {
  faqs?: IFaq[] | null;
}
