import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeBuyer from "../../screens/home/HomeBuyer";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const DrawerNav = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerNav.Navigator initialRouteName="HomeBuyer">
      <DrawerNav.Screen
        name="HomeBuyer"
        component={HomeBuyer}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
