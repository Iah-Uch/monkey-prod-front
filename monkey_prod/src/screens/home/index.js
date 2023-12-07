import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center, } from "native-base";


const Home = () => {

  const { navigate } = useNavigation();

  return (

    <ScrollView>
      <VStack style={styles.container}>

        <HStack style={styles.navBar}>
          <TouchableOpacity style={styles.report}>
            <Text style={styles.reportText}>\RepoName</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("Profile")}>
            <Image
              style={{
                alignContent: 'flex-end',
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

        <VStack style={styles.commit}>
          <HStack
            style={{
              marginTop: 5,
              justifyContent: "space-evenly",
            }}>
            <Text style={styles.h3}>Commit Goals</Text>
            <TouchableOpacity>
              <Image

                source={require("../../../assets/images/AddCommit.png")} />
            </TouchableOpacity>
          </HStack>

          <VStack style={styles.commitElements}>
            <HStack style={styles.goal}>
              <Image source={require("../../../assets/images/alpha-x-circle-outline.png")} />
              <Text style={styles.h3}>  GOAL 1 - X Objective  </Text>
              <Text style={styles.h3}>  32/35  </Text>
            </HStack>
            <HStack style={styles.goalVerify}>
              <Image source={require("../../../assets/images/check-circle-outline.png")} />
              <Text style={styles.h3}>    GOAL 2 - Y Objective  </Text>
              <Text style={styles.h3}>  32/35  </Text>
            </HStack>
            <HStack style={styles.goal}>
              <Image source={require("../../../assets/images/alpha-x-circle-outline.png")} />
              <Text style={styles.h3}>    GOAL 3 - Z Objective  </Text>
              <Text style={styles.h3}>  32/35  </Text>
            </HStack>
          </VStack>
        </VStack>

        <Image source={require("../../../assets/images/distributed.png")} />
      </VStack>
    </ScrollView>

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
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingTop: 20,
    paddingBottom: 20,
  },
  h3: {
    fontSize: 18,
    color: "#FFFFFF",

  },
  number: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#57FFEB",
    paddingTop: 10,
    paddingBottom: 10,
  },
  commit: {
    justifyContent: "space-evenly",
    backgroundColor: "#1A282D",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  commitElements: {
    justifyContent: "space-evenly",
    backgroundColor: "#1A282D",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  goal: {
    justifyContent: "space-evenly",
    backgroundColor: "#4F4F4F",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  goalVerify: {
    justifyContent: "space-evenly",
    backgroundColor: "#23B198",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  imageDistributed: {
    justifyContent: "center",
    width: 100,
    height: 100,
    padding: 10,
    marginTop: 10,
  },
});

export default Home;
