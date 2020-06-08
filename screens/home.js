import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/card";
import { s } from "../globalStyles";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut maxime cum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (Again)",
      rating: 4,
      body:
        "dolorum quidem pariatur quos voluptate cumque minus fuga, dolor enim",
      key: "2",
    },
    {
      title: "WKWK LAND",
      rating: 3,
      body:
        "nulla eius alias officiis harum reprehenderit ducimus ab. Officia!",
      key: "3",
    },
  ]);

  const [modal, setModal] = useState(false);

  return (
    <View style={s.container}>
      <View style={s.modal}>
        <Modal visible={modal}>
          <View>
            <MaterialIcons
              name='close'
              size={30}
              onPress={() => setModal(!modal)}
            />
            <Text>Hello from Modal</Text>
          </View>
        </Modal>
        <MaterialIcons
          name='add'
          size={30}
          style={{ alignSelf: "center" }}
          onPress={() => setModal(!modal)}
        />
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", item)}
            >
              <Card>
                <Text style={s.title}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
