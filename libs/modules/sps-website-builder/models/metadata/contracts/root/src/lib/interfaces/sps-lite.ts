export const variants = ["default", "primary"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  viewport?: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphUrl?: string;
  opengraphType?: string;
  opengraphSiteName?: string;
  opengraphLocale?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterUrl?: string;
  twitterDomain?: string;
  twitterAppCountry?: string;
}
