import { IComponent as IPageBlock } from "../../../components/page-blocks/interfaces";
import type { IEntity as ILayout } from "../../layout/interfaces";
import { IEntity as ILocale } from "../../locale/interfaces/index";
import type { IEntity as IMetatag } from "../../metatag/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  pageBlocks?: IPageBlock[] | null;
  localizations?: ILocale[] | null;
  layout?: ILayout | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  metatag?: IMetatag | null;
  urls?: { url: string; locale: string }[] | null;
}
