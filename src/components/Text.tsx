import { usePalette } from "@/context/Palette";
import { ProminenceLevel } from "@/theme/palette";
import { PropsWithChildren } from "react";
import { Text as RNText, TextStyle } from "react-native";

interface TextProps extends PropsWithChildren {
  prominence?: ProminenceLevel;
}

const BASE: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  fontFamily: "Literata_400Regular",
};

export function Text({ children, prominence = "primary" }: TextProps) {
  const color = usePalette("text", prominence);

  return <RNText style={[BASE, { color }]}>{children}</RNText>;
}
