export type IEntity<T, K extends string> = {
  [key in K]: T;
};
