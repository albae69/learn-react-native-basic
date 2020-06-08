// inisialiasi global stylesheet
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    paddingTop: 10,
    marginTop: -10,
  },
  desc: {
    fontFamily: "nunito-regular",
    fontSize: 16,
  },
  rating: {
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
  },
});
