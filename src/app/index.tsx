import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ title: "hey" }} />
      <Text>Hello, world</Text>
    </View>
  );
}
