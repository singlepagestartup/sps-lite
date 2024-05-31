export const variants = ["default"] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  className?: string;
  variant: (typeof variants)[number];
  data: {
    id: string;
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
