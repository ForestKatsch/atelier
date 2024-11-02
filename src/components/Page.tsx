import { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Page({ children }: PropsWithChildren) {
  return <View>{children}</View>;
}
