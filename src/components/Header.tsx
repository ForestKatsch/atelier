import { usePalette } from "@/context/Palette";
import { HEADER_HEIGHT } from "@/theme/constants";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header({ children }: PropsWithChildren) {
  const { background, shadow } = usePalette();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        backgroundColor: background,
        boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 8, color: shadow }],
      }}
    >
      <View style={{ height: HEADER_HEIGHT.regular }}>{children}</View>
    </SafeAreaView>
  );
}
