import React from "react";
import { Text, View } from "react-native";

import { s } from "../globalStyles";

export default function About() {
  return (
    <View style={s.container}>
      <Text style={s.title}>About Screen</Text>
      <Text style={s.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut maxime cum
        dolorum quidem pariatur quos voluptate cumque minus fuga, dolor enim
        nulla eius alias officiis harum reprehenderit ducimus ab. Officia!
      </Text>
    </View>
  );
}
