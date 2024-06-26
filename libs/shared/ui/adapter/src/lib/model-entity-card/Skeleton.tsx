import { IComponentProps } from "./interface";
import { Pencil, Trash } from "lucide-react";

export function Skeleton(props: IComponentProps) {
  return (
    <div data-ui="entity-card" className="entity-container">
      <div className="entity-header-block">
        <div className="bg-white rounded">
          <p className="w-40 h-4 skeleton"></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="pill-button">
            <Pencil className="h-3 w-3" />
            <p className="hidden lg:inline">Edit</p>
          </button>

          <button className="destructive-pill-button">
            <Trash className="h-3 w-3" />
            <p className="hidden lg:inline">Delete</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-6">
        <div className="skeleton h-8"></div>
        <div className="skeleton h-8"></div>
        <div className="skeleton h-8"></div>
      </div>
    </div>
  );
}
