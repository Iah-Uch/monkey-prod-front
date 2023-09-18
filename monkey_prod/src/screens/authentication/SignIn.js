import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, TouchableOpacity } from "react-native";
import { VStack, HStack, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";


const SignIn = () => {

  const { navigate } = useNavigation();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    // Lógica para autenticar o usuário com o email e senha fornecidos
    // Aqui você pode fazer uma chamada a uma API ou implementar sua própria lógica de autenticação

    console.log("UserName:", userName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
  };

  return (
    <VStack style={styles.container}>
      <Text style={styles.h1}>Sign in up</Text>
      <Text style={styles.h2}>Lorem Ipsum is simply</Text>
      <Text style={styles.h3}>If you already have an account register</Text>
      <HStack>
        <Text style={styles.h3}>You can </Text>
        <TouchableOpacity onPress={() => navigate("SignUp")}>
          <Text style={styles.h3green}> Login here !</Text>
        </TouchableOpacity>
      </HStack>

      <TextInput
        style={styles.input}
        placeholder="User name"
        placeholderTextColor="#FFFFFF"
        value={userName}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        value={email}
        onChangeText={(text) => setEmail(text)}

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setPassword(text)}
      />
      <Button style={{
        backgroundColor: "FFFFFF",
        color: "FFFFFF",

      }} title="Entrar" onPress={handleLogin} />
      {/* onPress={() => navigate("SignUp")} */}
      <StatusBar style="auto" />
    </VStack >
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
    paddingTop: 20,
    // fontFamily: "Poppins",
  },
  h2: {
    fontSize: 24,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingTop: 20,
    // fontFamily: "Poppins",
  },
  h3: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingTop: 20,
    // fontFamily: "Poppins",
  },
  h3green: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#23B198",
    paddingTop: 20,
    // fontFamily: "Poppins",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#1A282D",
    width: "100%",
    height: 62,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 20,
  },

  entrar: {
    backgroundColor: "#23B198",
    width: "100%",
    height: 62,
  },
});

export default SignIn;
