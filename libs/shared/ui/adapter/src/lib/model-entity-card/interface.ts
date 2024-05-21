import { ReactNode } from "react";

export interface IComponentProps {
  data?: {
    id: string;
  };
  showSkeletons?: boolean;
  onDeleteEntity?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  adminForm?: ReactNode;
  children?: ReactNode;
}
