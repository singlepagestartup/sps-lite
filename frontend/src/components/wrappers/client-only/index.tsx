import { Fragment, useEffect, useState } from "react";

export default function ClientOnlyWrapper({ children, ...delegated }: any) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <Fragment {...delegated}>{children}</Fragment>;
}
