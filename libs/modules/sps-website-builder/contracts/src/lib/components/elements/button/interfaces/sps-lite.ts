export interface IComponent {
  id: number;
  __component?: "elements.button";
  variant:
    | "primary"
    | "secondary"
    | "locale"
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
