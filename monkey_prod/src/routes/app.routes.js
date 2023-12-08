import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import React from "react";
import Profile from "../screens/profile/Profile";
import Settings from "../screens/settings/Settings";
import { HStack, Text, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const { Navigator, Screen } = createDrawerNavigator();

const AppRoutes = () => {
  const { navigate } = useNavigation();

  return (
    <Navigator
      screenOptions={{
        headerRight: () => (
          <HStack
            style={{
              justifyContent: "center",
              borderBlockColor: "#1A282D",
            }}
          >
             <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                borderRadius: 25,
                backgroundColor: "#1A282D",
                marginRight: 50
              }}
            >
              <Text fontWeight={"bold"} color={"white"}>
                \RepoName
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("Profile")}>
              <Image
                w={10}
                h={10}
                marginRight={15}
                source={require("../../assets/images/profilePhoto.png")}
                alt="profile image"
              />
            </TouchableOpacity>
          </HStack>
        ),
        headerStyle: {
          backgroundColor: "#0B1416",
        },
        headerTitleStyle: { display: "none" },
        drawerStyle: {
          backgroundColor: "#0B1416",
        },
        headerTintColor: "white",
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};
export default AppRoutes;
