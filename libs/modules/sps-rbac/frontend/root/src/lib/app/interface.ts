export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  className?: string;
  variant: string;
  widgetId: string;
}

export interface IComponentPropsExtended extends IComponentProps {}
