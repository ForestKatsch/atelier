import { Literata_400Regular, useFonts } from "@expo-google-fonts/literata";

import { useEffect, useState } from "react";

export function useAppReady() {
  const fontsReady = useFontsReady();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    void (async () => {
      // TODO: add setup setps

      setReady(true);
    })();
  }, []);

  return { ready: ready && fontsReady };
}

function useFontsReady() {
  // TODO: handle error.
  const [loaded, error] = useFonts({
    Literata_400Regular,
  });

  return loaded;
}
