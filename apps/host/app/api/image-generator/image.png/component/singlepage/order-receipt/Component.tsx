import React from "react";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "Primary",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Order Receipt
        </p>
        <p
          style={{
            fontFamily: "Default",
            fontSize: "1rem",
          }}
        >
          {props.id ?? "id"}
        </p>
      </div>
    </div>
  );
}
