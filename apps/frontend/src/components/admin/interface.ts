export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
  isEditing?: boolean;
}

export interface IComponentProps extends IComponentBase {}

export interface IComponentPropsExtended extends IComponentProps {}
