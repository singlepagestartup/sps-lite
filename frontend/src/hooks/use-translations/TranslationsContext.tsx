import { createContext, ReactNode, useContext } from "react";
import useTranslations from ".";

const TranslationsContext = createContext<any>(null);

export const useTranslationsContext = () => {
  return useContext(TranslationsContext);
};

const TranslationsContextWrapper = ({ children }: { children: ReactNode }) => {
  const translations = useTranslations();

  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsContextWrapper;
