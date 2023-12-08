import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center, Button } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Settings = () => {
  const { navigate } = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState('');
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [commits, setCommits] = useState([]);
  const alternateSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    const fetchCommits = async () => {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCommits(data);
        await AsyncStorage.setItem('commits', commits)
        } else {
          console.log('Falha ao obter os commits:', response.status);
        }
      } catch (error) {
        console.error('Erro ao buscar os commits:', error);
      }
    };
    fetchCommits();
  }, [token]);
  
  const saveTokenAndUsername = async () => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('owner', owner);
      await AsyncStorage.setItem('repository', repo);
      setModalVisible(false);
      Alert.alert('Success', 'Token and username saved successfully!');
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
      Alert.alert('Error', 'Failed to save token and username');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <ScrollView style={styles.container}>
      <VStack>
        <HStack style={styles.header}>
          <TouchableOpacity
            onPress={() => navigate("Home")}
            style={styles.return}
          >
            <Image source={require("../../../assets/images/Vector.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("Profile")}>
            <Image
              source={require("../../../assets/images/ProfileImage.png")}
            />
          </TouchableOpacity>
        </HStack>

        <Text style={styles.h1}>Settings</Text>

        <VStack style={styles.container}>
          <HStack style={styles.elementsSettings}>
            <Text style={styles.h3}>Commit Count</Text>
            <Switch
              trackColor={{ false: "#F2F4F5", true: "#76EE59" }}
              trumbColor={!isEnabled ? "#4F4F4F" : "#23B198"}
              onValueChange={alternateSwitch}
              value={isEnabled}
              style={{
                marginTop: 35,
              }}
            />
          </HStack>
          <HStack style={styles.elementsSettings}>
            <Text style={styles.h3}>Commit Average</Text>
            <Switch
              trackColor={{ false: "#F2F4F5", true: "#76EE59" }}
              trumbColor={!isEnabled ? "#4F4F4F" : "#23B198"}
              onValueChange={alternateSwitch}
              value={isEnabled}
              style={{
                marginTop: 35,
              }}
            />
          </HStack>
          <HStack style={styles.elementsSettings}>
            <Text style={styles.h3}>Commit Goals Board</Text>
            <Switch
              trackColor={{ false: "#F2F4F5", true: "#76EE59" }}
              trumbColor={!isEnabled ? "#4F4F4F" : "#23B198"}
              onValueChange={alternateSwitch}
              value={isEnabled}
              style={{
                marginTop: 35,
              }}
            />
          </HStack>
          <HStack style={styles.elementsSettings}>
            <Text style={styles.h3}>Collaborator Activity</Text>
            <Switch
              trackColor={{ false: "#F2F4F5", true: "#76EE59" }}
              trumbColor={!isEnabled ? "#4F4F4F" : "#23B198"}
              onValueChange={alternateSwitch}
              value={isEnabled}
              style={{
                marginTop: 35,
              }}
            />
          </HStack>
        </VStack>

        <VStack style={styles.repository}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.h2}>Bind Repository API Key</Text>
          </TouchableOpacity>
        </VStack>

        <TouchableOpacity style={styles.unbind}>
          <Text style={styles.h4}>Unbind Repo</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView} onStartShouldSetResponder={() => true}>
                <TextInput
                  style={styles.input}
                  placeholder="Token"
                  placeholderTextColor={"white"}
                  onChangeText={text => setToken(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor={"white"}
                  onChangeText={text => setOwner(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Repository Name"
                  placeholderTextColor={"white"}
                  onChangeText={text => setRepo(text)}
                />
                <Button bgColor={"#23B198"}>
                    Save
                </Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
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
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingTop: 40,
  },
  h2: {
    paddingTop: 25,
    fontSize: 20,
    color: "#FFFFFF",
  },
  h3: {
    fontSize: 24,
    color: "#FFFFFF",
    paddingTop: 40,
  },
  h4: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  unbind: {
    backgroundColor: "#7E1515",
    width: "100%",
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  repository: {
    marginTop: 80,
    marginBottom: 80,
    paddingBottom: 15,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderBlockColor: "#1A282D",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1.5,
    borderBlockColor: "#1A282D",
  },
  elementsSettings: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderBlockColor: "#1A282D",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#1A282D",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
    borderRadius:5,
    marginBottom: 20,
    padding: 10,
    width: 200,
    color:"#FFFF",
  }
});

export default Settings;
