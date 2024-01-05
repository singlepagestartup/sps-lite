import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import Table, {
  ICellCompProps,
  IDropdownButtonProps,
  IDropdownRowCompProps,
  IHeaderCompProps,
} from "..";
import { entity } from "~redux/services/backend/extensions/sps-crm/api/review/mock/sps-lite";

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

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

const reviews = Array(5).fill(entity);

export const Simple: Story = {
  args: {
    variant: "simple",
    items: reviews,
    tableConfig: tableConfig,
    showSkeletons: false,
  },
};

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
