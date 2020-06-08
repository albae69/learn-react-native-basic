import React from "react";
// buat stack navigasi untuk home
import { createStackNavigator } from "react-navigation-stack";

import { Home, Detail } from "../screens";
import Header from "../components/header";

// screen yang di render di stack home
const screens = {
  Home: {
    screen: Home,
    // default navigationOptions adalah sebuah object
    navigationOptions: ({ navigation }) => {
      //untuk mendapatkan props,ubah menjadi anonim/arrow fungsi
      return {
        headerTitle: () => (
          <Header navigation={navigation} title='GameReview' />
        ),
      };
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: "Detail",
    },
  },
};

// buat stack home menggunakan screen yang dibuat sebagai paramaeter
const HomeStack = createStackNavigator(screens);

export default HomeStack;
