import { Dispatch, FC, SetStateAction } from "react";
import Simple from "./Simple";

const variants = {
  simple: Simple,
};

interface ITablesBlock extends ITableProps {
  variant: `simple`;
}

/**
 * Passed to Comp components will have that interface
 */
export interface ICellCompProps extends ITableItemProps {
  column: ITableCollumn;
  index: number;
}

export interface IHeaderCompProps extends ITableProps {
  column: ITableCollumn;
  index: number;
}

export interface IDropdownButtonProps extends ITableItemProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IDropdownRowCompProps extends ITableItemProps {}

export interface ITableCollumn {
  header: {
    title: string;
    accessor?: string;
    widthClassName: string;
    Comp?: React.ComponentType<ICellCompProps>;
  };
  cell: {
    Comp: React.ComponentType<ICellCompProps>;
    widthClassName: string;
  };
}

export interface ITableProps {
  tableConfig: ITableConfig;
  items: any[] | undefined;
  showSkeletons: boolean;
  [key: string]: any;
}

export interface ITableItemProps extends ITableProps {
  item: any;
}

export interface ITableConfig {
  className?: string;
  emptyLength?: number;
  columns: ITableCollumn[];
  dropdown?: {
    Comp: React.ComponentType<any>;
    button: {
      Comp?: React.ComponentType<any>;
      widthClassName?: string;
    };
  };
}

export default function Tables(props: ITablesBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ITableProps>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
