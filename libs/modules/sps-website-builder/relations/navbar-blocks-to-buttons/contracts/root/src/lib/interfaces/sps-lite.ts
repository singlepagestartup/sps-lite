export interface IRelation {
  id: string;
  navbarBlockId: string;
  buttonId: string;
  orderIndex: number;
  place: "default" | "additional" | "extra";
}
