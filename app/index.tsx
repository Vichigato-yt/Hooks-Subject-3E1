import { useState } from "react";
import { Text, View, Button } from "react-native";
import { Pressable } from "react-native";
import IconButtons from "../components/IconButtons";

export default function Index() {

  const [contador, setContador] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <IconButtons Icon="caret-up" tam={40}></IconButtons>
        <IconButtons Icon="caret-down" tam={40}></IconButtons>
      <Text>{contador}</Text>
    </View>
  );
}
