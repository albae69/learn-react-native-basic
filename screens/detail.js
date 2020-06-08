import React from "react";
import { Text, View, Image } from "react-native";

import Card from "../components/card";
import { s } from "../globalStyles";
import { images } from "../assets/images";

export default function Detail({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={s.container}>
      <Card>
        <Text style={s.title}>{navigation.getParam("title")}</Text>
        <Text style={s.desc}>{navigation.getParam("body")}</Text>
        <View style={s.rating}>
          <Text style={s.ratingText}>Game Rating : </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}
