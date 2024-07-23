import { FindServiceProps } from "../services/interfaces";

export interface IService<DTO extends Record<string, unknown>> {
  find: (props?: FindServiceProps) => Promise<DTO[]>;
  findById: (props: { id: string }) => Promise<DTO | null>;
  create: (props: { data: DTO }) => Promise<DTO | null>;
  delete: (props: { id: string }) => Promise<DTO | null>;
  update: (props: { id: string; data: DTO }) => Promise<DTO | null>;
  dump: () => Promise<DTO[]>;
}
