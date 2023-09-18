import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home</Text>

      <View>
        <TouchableOpacity
          onPress={() => navigate("SignIn")}
          style={styles.Entrar}
        >
          <Text
            style={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: 28,
            }}
          >Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});

export default Home;
