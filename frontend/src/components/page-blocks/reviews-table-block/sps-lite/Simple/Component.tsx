"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Table, {
  ICellCompProps,
  IDropdownButtonProps,
  IDropdownRowCompProps,
  IHeaderCompProps,
} from "~components/table";
import { api as reviewApi } from "~redux/services/backend/extensions/sps-crm/api/review/api";
import { IPageBlock } from "../..";

const tableConfig = {
  columns: [
    {
      header: {
        title: "Name",
        accessor: "name",
        Comp: HeaderCell,
        widthClassName: "w-[30%]",
      },
      cell: {
        Comp: NameCell,
        widthClassName: "w-[30%]",
      },
    },
    {
      header: {
        title: "Title",
        accessor: "title",
        widthClassName: "w-[30%]",
      },
      cell: {
        Comp: TitleCell,
        widthClassName: "w-[30%]",
      },
    },
    {
      header: {
        title: "SubTitle",
        accessor: "subtitle",
        widthClassName: "w-[40%]",
      },
      cell: {
        Comp: SubTitleCell,
        widthClassName: "w-[40%]",
      },
    },
  ],
  dropdown: {
    Comp: DropdownRow,
    button: {
      Comp: DropdownCell,
      widthClassName: "w-[5%]",
    },
  },
};

export default function Component(props: IPageBlock) {
  const {
    data: reviews,
    isLoading,
    isFetching,
    isUninitialized,
  } = reviewApi.useGetQuery({});

  return (
    <div className="bg-gray-50 mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h3 className="mb-6 text-3xl text-center font-bold">Reviews table</h3>
      <Table
        variant="simple"
        items={reviews}
        tableConfig={tableConfig}
        showSkeletons={isLoading || isFetching || isUninitialized}
      />
    </div>
  );
}

function NameCell(props: ICellCompProps) {
  const { item } = props;

  return <div className="py-2">{item.name}</div>;
}

function TitleCell(props: ICellCompProps) {
  const { item } = props;

  return <div className="py-2">{item.title}</div>;
}

function SubTitleCell(props: ICellCompProps) {
  const { item } = props;

  return <div className="py-2">{item.subtitle}</div>;
}

function DropdownCell(props: IDropdownButtonProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <div
      className={"h-5 w-5 rounded-full cursor-pointer"}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <ChevronDownIcon
        className={`w-5 h-5 transform duration-200 ${
          isOpen ? "rotate-0" : "-rotate-90"
        }`}
      />
    </div>
  );
}

function DropdownRow(props: IDropdownRowCompProps) {
  const { item } = props;

  return (
    <div className="py-5">
      <p className="text-sm">{item.description}</p>
    </div>
  );
}

function HeaderCell(props: IHeaderCompProps) {
  const { column } = props;

  return <div className="font-bold uppercase">{column.header?.title}</div>;
}
