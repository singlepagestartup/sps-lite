export interface IEntity {
  id: number;
  name: string;
  description: string | null;
  type: "authenticated" | "public";
  createdAt: string;
  updatedAt: string;
}
