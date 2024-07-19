export interface IService<DTO extends Record<string, unknown>> {
  find: () => Promise<DTO[]>;
  findById: (props: { id: string }) => Promise<DTO | null>;
  create: (props: { data: DTO }) => Promise<DTO | null>;
  delete: (props: { id: string }) => Promise<DTO | null>;
  update: (props: { id: string; data: DTO }) => Promise<DTO | null>;
}
