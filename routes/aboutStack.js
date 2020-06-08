import React from "react";
// buat stack untuk About
import { createStackNavigator } from "react-navigation-stack";

import { About } from "../screens";
import Header from "../components/header";

// buat screen yang akan di render di About
const screens = {
  About: {
    screen: About,
    //untuk mendapatkan props,ubah menjadi anonim/arrow fungsi
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title='About GameReview' />
        ),
      };
    },
  },
};

// buat stack about menggunakan screens sebagai parameter
// tambahkan default navigation
const AboutStack = createStackNavigator(screens);

export default AboutStack;
