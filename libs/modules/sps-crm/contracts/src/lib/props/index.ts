import { IComponent as IPageBlock } from "../components/page-blocks/interfaces";
import { IPage as IParentPage } from "@sps/sps-website-builder-contracts/lib/props";

export interface IPage extends Omit<IParentPage, "pageBlocks"> {
  pageBlocks?: IPageBlock[] | null;
}
