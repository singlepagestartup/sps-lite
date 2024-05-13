import { TableCell, TableRow, Skeleton as Sk } from "@sps/shadcn";
import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return (
    <TableRow
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
    >
      <TableCell>
        <Sk className="h-8" />
      </TableCell>
      <TableCell>
        <Sk className="h-8" />
      </TableCell>
      <TableCell>
        <Sk className="h-8" />
      </TableCell>
      <TableCell>
        <Sk className="h-8" />
      </TableCell>
    </TableRow>
  );
}
