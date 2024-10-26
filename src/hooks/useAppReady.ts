import { useEffect, useState } from "react";

export function useAppReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    void (async () => {
      // TODO: add setup setps

      setReady(true);
    })();
  }, []);

  return { ready };
}
