import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import React from "react";
import SignIn from "../screens/authentication/SignIn";
import SignUp from "../screens/authentication/SignUp";

const {Navigator, Screen} = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};
export default AppRoutes;
