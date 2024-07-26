import { QueryBuilderFilterMethods } from "../configuration";

export interface FindServiceProps {
  params?: {
    filters?: {
      and: {
        column: string;
        method: keyof QueryBuilderFilterMethods;
        value: string | Date | number | boolean | [number, number];
      }[];
    };
    orderBy?: {
      and: {
        column: string;
        method: "asc" | "desc";
      }[];
    };
    offset?: number;
    limit?: number;
  };
}

export interface FindByIdServiceProps {
  id: string;
  params?: {
    populate: any;
  };
}
