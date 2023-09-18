import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center } from "native-base";


const Home = () => {

  const { navigate } = useNavigation();

  return (
    <VStack style={styles.container}>

      <HStack style={styles.navBar}>
        <TouchableOpacity style={styles.report}>
          <Text style={styles.reportText}>\RepoName</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Profile")}>
          <Image
            style={{
              alignContent: 'rigth',
            }}
            source={require("../../../assets/images/ProfileImage.png")} />
        </TouchableOpacity>

      </HStack>

      <Text style={styles.h1}>Commit</Text>


      <HStack style={styles.commit}>
        <VStack>
          <Center>
            <Text style={styles.h2}>Count</Text>
            <Text style={styles.number}>32</Text>
          </Center>
        </VStack>

        <VStack>
          <Center>
            <Text style={styles.h2}>Average </Text>
            <Text style={styles.number}>28</Text>
          </Center>
        </VStack>
      </HStack>

      <VStack>
        <HStack style={styles.commit}>
          <Text style={styles.h3}>Commit Goals</Text>
          <TouchableOpacity>
            <Image
              style={{
                alignContent: 'rigth',
              }}
              source={require("../../../assets/images/AddCommit.png")} />
          </TouchableOpacity>
        </HStack>



      </VStack>



      {/*
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
      </View> */}

    </VStack>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B1416",
    padding: 16,
  },
  navBar: {
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBlockColor: "#1A282D",
    paddingBottom: 16,
  },
  report: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    borderRadius: 25,
    backgroundColor: "#1A282D",
    padding: 10,
  },
  reportText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingTop: 40,
    textAlign: "center",
    // fontFamily: "Poppins",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingTop: 20,
    paddingBottom: 20,
  // fontFamily: "Poppins",
  },
  h3: {
    fontSize: 18,
    color: "#FFFFFF",

    // fontFamily: "Poppins",
  },
  number: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#57FFEB",
    paddingTop: 10,
    paddingBottom: 10,
    // fontFamily: "Poppins",
  },
  commit: {
    justifyContent: "space-evenly",
    backgroundColor: "#1A282D",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

export default Home;
