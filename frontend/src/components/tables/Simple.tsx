import dayjs from "dayjs";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ICellCompProps,
  IDropdownButtonProps,
  IHeaderCompProps,
  ITableCollumn,
  ITableItemProps,
  ITableProps,
  IDropdownRowCompProps,
} from ".";

export const animationClassName = `bg-gray-200 animate-pulse`;

/**
 *
 *
 * |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾|
 * |  .table__dropdown__button   |       DefaultHeader      |       DefaultHeader      |     ...     |
 * |—–––––———————————————––––––––+——————————————————————————+——————————————————————————+—————————————|
 * | .table__dropdown__button    |                          |                          |             |
 * |      dropdown.button.Comp   |    column.cell.Comp      |    column.cell.Comp      |     ...     |
 * |                             |                          |                          |             |
 * |- - - - - - - - - - - -  -  —+— - - - - - - - - - - - - +— - - - - - - - - - - - - + - - - - - - |
 * |  .table__dropdown__button   |                           DropdownRow                             |
 * |—————————————————————————————————————————————————————————————————————————————————————————————————|
 * |                                         ...                                                     |
 * |                                                                                                 |
 */
export default function Simple(props: ITableProps) {
  const { tableConfig, items, showSkeletons } = props;

  const localItems = useMemo(() => {
    if (showSkeletons) {
      return Array(tableConfig?.emptyLength || 5).fill({});
    }

    return items;
  }, [items, showSkeletons]);

  const isEmpty = useMemo(() => {
    if (!items?.length && !showSkeletons) {
      return true;
    }

    return false;
  }, [items, showSkeletons]);

  return (
    <div className={tableConfig?.className || ``}>
      <div className="table__container">
        <div className="table__header">
          <div className="table__header__item">
            {typeof tableConfig.dropdown?.Comp === `function` ? (
              <div
                className={`${tableConfig.dropdown?.button.widthClassName} table__dropdown__button`}
              ></div>
            ) : null}
            {tableConfig?.columns?.map((column: any, index: number) => {
              let RenderComp = DefaultHeaderCell;

              if (column.header?.Comp) {
                RenderComp = column.header.Comp;
              }

              return (
                <div
                  key={index}
                  className={`table__cell ${column?.header?.widthClassName}`}
                >
                  <RenderComp {...props} column={column} index={index} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="table__body">
          {localItems?.map((item: any, index: number) => {
            return (
              <TableItem
                {...props}
                key={index}
                item={item}
                showSkeletons={showSkeletons}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DefaultHeaderCell(props: IHeaderCompProps) {
  const { column } = props;

  if (!column?.header?.title) {
    return <></>;
  }

  return (
    <div className="w-full">
      <p>{column.header.title}</p>
    </div>
  );
}

function TableItem(props: ITableItemProps) {
  const { tableConfig } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-dropdow={typeof tableConfig?.dropdown?.Comp === `function`}
      className="table__item"
    >
      <div className="table__item__content">
        <div className="table__row">
          {typeof tableConfig.dropdown?.Comp === `function` ? (
            <div
              className={`${tableConfig.dropdown?.button?.widthClassName} table__dropdown__button`}
            >
              <DropdownButtonCell
                {...props}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          ) : null}
          {tableConfig?.columns?.map(
            (column: ITableCollumn, cIndex: number) => {
              const CellComp = column.cell.Comp;

              return (
                <div
                  key={cIndex}
                  className={`table__cell ${column?.cell?.widthClassName}`}
                >
                  <CellComp {...props} column={column} index={cIndex} />
                </div>
              );
            }
          )}
        </div>

        <div data-is-open={isOpen} className={`table__dropdown`}>
          {typeof tableConfig.dropdown?.Comp === `function` ? (
            <div
              className={`${tableConfig.dropdown?.button?.widthClassName} table__dropdown__button`}
            ></div>
          ) : null}
          {typeof tableConfig.dropdown?.Comp === `function` ? (
            <DropdownRow {...props} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function DropdownButtonCell(props: IDropdownButtonProps) {
  const { tableConfig } = props;

  const RenderComponent = useMemo(() => {
    if (!tableConfig.dropdown?.button?.Comp) {
      return DefaultDropdownButtonCell;
    }

    return tableConfig.dropdown?.button?.Comp;
  }, [JSON.stringify(props.dropdown)]);

  return <RenderComponent {...props} />;
}

function DefaultDropdownButtonCell(props: IDropdownButtonProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-pointer flex items-center justify-center w-[20px] h-[20px] mx-auto`}
    >
      <svg
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-current w-[10px] transform duration-200 ${
          isOpen ? `rotate-0` : `-rotate-90`
        }`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.176801 0.241294C0.426537 -0.0630718 0.848309 -0.0820516 1.11886 0.198901L5 4.22932L8.88114 0.198901C9.15169 -0.0820516 9.57346 -0.0630718 9.8232 0.241294C10.0729 0.545659 10.0561 1.02015 9.78552 1.30111L5.45219 5.8011C5.19681 6.0663 4.80319 6.0663 4.54781 5.8011L0.214483 1.30111C-0.0560639 1.02015 -0.0729348 0.545659 0.176801 0.241294Z"
        />
      </svg>
    </div>
  );
}

function DropdownRow(props: IDropdownRowCompProps) {
  const { item, tableConfig } = props;

  const RenderComponent = useMemo(() => {
    return tableConfig?.dropdown?.Comp;
  }, [JSON.stringify(props.dropdown)]);

  if (!RenderComponent) {
    return <></>;
  }

  return (
    <div className={`dropdown__row w-full`}>
      <RenderComponent {...props} />
    </div>
  );
}
