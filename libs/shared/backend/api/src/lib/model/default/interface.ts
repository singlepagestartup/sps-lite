import { FindByIdServiceProps } from "../../services/interfaces";

export interface IModel {
  find: () => Promise<any>;
  // findById: (props: FindByIdServiceProps) => Promise<any>;
  // create: (props: any) => Promise<any>;
}
