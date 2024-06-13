export interface FindServiceProps {
  params?: {
    populate?: any;
    filters?: any;
    orderBy?: any;
    offset?: any;
    limit?: any;
  };
}

export interface FindByIdServiceProps {
  id: string;
  params?: {
    populate: any;
  };
}
