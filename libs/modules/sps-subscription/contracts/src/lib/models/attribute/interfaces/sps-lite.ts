export interface IModel {
  id: number;
  string: string | null;
  number: number | null;
  boolean: boolean | null;
  createdAt: string;
  updatedAt: string;
  locale: string;
  date: string | null;
  datetime: string | null;
  time: string | null;
  notToClear?: boolean;
}
