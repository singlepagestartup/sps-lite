export interface IEntity {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  urls?: { url: string; locale: string }[] | null;
  localizations: IEntity[] | null;
}
