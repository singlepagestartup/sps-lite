export interface IModel {
  id: number;
  __component?: "elements.button";
  variant:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  title: string | null;
  url: string | null;
  description: string | null;
  className: string | null;
  additionalAttributes: any | null;
}
