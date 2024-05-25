export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  variant: (typeof variants)[number];
  direction: "default" | "reverse";
  position: "default" | "additional" | "extra";
  className?: string;
  navbarBlockId: string;
  buttonsArrayId: string;
}
