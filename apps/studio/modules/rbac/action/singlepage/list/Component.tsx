import { Component as Card } from "../admin-v2-card/index";
import fixture from "../admin-v2-table/data.json";
import type { IRecord } from "../admin-v2-table/interface";
export interface IComponentProps {
  data?: IRecord[];
  count?: number;
  empty?: boolean;
  className?: string;
}
export function Component({
  data = fixture.records,
  count = 3,
  empty = false,
  className,
}: IComponentProps) {
  const length =
    empty || !data.length || !Number.isFinite(count)
      ? 0
      : Math.max(0, Math.floor(count));
  if (!length)
    return (
      <p role="status" className="p-5">
        No records to display.
      </p>
    );
  return (
    <div className={`grid min-w-0 gap-4 p-4 sm:grid-cols-2 ${className ?? ""}`}>
      {Array.from({ length }, (_, index) => (
        <Card key={`${data[0].id}:${index}`} data={data[0]} />
      ))}
    </div>
  );
}
