"use client";

import { useState, createContext } from "react";

export const AdditionalHeadersContext = createContext<any>(null);

export function AdditionalHeadersWrapper({ children }: { children: any }) {
  const [headers, setHeaders] = useState();

  return (
    <AdditionalHeadersContext.Provider value={{ headers, setHeaders }}>
      {children}
    </AdditionalHeadersContext.Provider>
  );
}
