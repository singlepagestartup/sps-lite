import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/faq-block/interfaces";
import { IComponent as IFaq } from "@sps/sps-website-builder-contracts/lib/components/elements/faq/interfaces";

export interface IComponent extends IParentComponent {
  faqs?: IFaq[] | null;
}
