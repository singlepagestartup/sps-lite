"use client";

import { useSelector } from "react-redux";

export function StateGetter() {
  const currentState = useSelector((state) => state);
  console.log(`🚀 ~ StateGetter ~ currentState:`, currentState);

  return (
    <div className="w-fill py-10 flex items-center justify-center">
      <p>StateGetter</p>
    </div>
  );
}
