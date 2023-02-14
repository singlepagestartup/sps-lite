import { useMemo } from "react";
import { ICurrency } from "types";
import { useGetCurrenciesQuery } from "~redux/services/backend/models/currencies";

export default function useGetDefaultCurrency() {
  const { data: currencies } = useGetCurrenciesQuery({
    filters: {
      is_default: true,
    },
  });

  const defaultCurrency = useMemo(() => {
    if (currencies?.length) {
      return currencies[0];
    }
  }, [currencies]);

  return defaultCurrency as ICurrency;
}
