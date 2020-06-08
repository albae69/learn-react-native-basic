// inisialisasi navigasi
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// panggil stack yang sudah dibuat menggunakan createStackNavigator
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

// buat variable drawer yang menampung semua stack
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

// wrap it
export default createAppContainer(RootDrawerNavigator);
