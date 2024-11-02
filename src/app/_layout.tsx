import { Stack } from "expo-router";
import { useAppReady } from "../hooks/useAppReady";
import { QueryProvider } from "@/context/Query";
import { PaletteProvider } from "@/context/Palette";
import { light } from "@/theme/palette";

// TODO: fully hook up ready state to handle this without useEffect.
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const appReady = useAppReady();

  if (!appReady) {
    return null;
  }

  return (
    <QueryProvider>
      <PaletteProvider palette={light}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </PaletteProvider>
    </QueryProvider>
  );
}
