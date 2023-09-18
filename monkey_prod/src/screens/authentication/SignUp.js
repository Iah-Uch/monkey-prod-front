import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center } from "native-base";



const SignUp = () => {

  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para autenticar o usuário com o email e senha fornecidos
    // Aqui você pode fazer uma chamada a uma API ou implementar sua própria lógica de autenticação

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <VStack style={styles.container}>
      <Text style={styles.h1}>Sign in to </Text>
      <Text style={styles.h2}>Lorem Ipsum is simply</Text>
      <Text style={styles.h3}>If you already have an account register</Text>
      <HStack>
        <Text style={styles.h3}>You can </Text>
        <TouchableOpacity onPress={() => navigate("SignIn")}>
          <Text style={styles.h3green}> Register here !</Text>
        </TouchableOpacity>
      </HStack>

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
      <Text style={styles.h4}>Forgor password ?</Text>

      <Button style={{
        backgroundColor: "FFFFFF",
        color: "FFFFFF",

      }} title="Entrar" onPress={handleLogin} />
      {/* onPress={() => navigate("SignUp")} */}
      <Text style={styles.h3Center}>or continue with</Text>
      <Center>
        <Image
        style={{
          marginTop: 25,
        }}
        source={require("../../../assets/images/GoogleIcon.png")} />
      </Center>


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
  h4: {
    fontSize: 14,
    fontWeight: "light",
    color: "#B0B0B0",
    textAlign: "right",
    marginBottom: 20,
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
  h3Center: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#B5B5B5",
    paddingTop: 20,
    textAlign: "center",
    // fontFamily: "Poppins",
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


export default SignUp;
