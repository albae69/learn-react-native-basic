// membuat custom header untuk di render di stack navigasi
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// membuat navigation props
export default function header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={s.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={s.icon} />
      <View style={s.title}>
        <Image
          style={s.headerImage}
          source={require("../assets/images/heart_logo.png")}
        />
        <Text style={s.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 18,
  },
  title: {
    flexDirection: "row",
  },
  headerImage: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
});
