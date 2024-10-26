import { Stack } from "expo-router";
import { useAppReady } from "../hooks/useAppReady";

export default function RootLayout() {
  const appReady = useAppReady();

  if (!appReady) {
    return null;
  }

  return <Stack />;
}
