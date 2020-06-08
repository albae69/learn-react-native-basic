import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return (
    <View style={s.card}>
      <View style={s.content}>{children}</View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 10,
  },
  content: {
    marginHorizontal: 18,
    marginVertical: 9,
    padding: 10,
  },
});
