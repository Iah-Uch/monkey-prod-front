import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { VStack, HStack, Text, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { encode, decode } from "js-base64";
import * as yup from "yup";
import { Input } from "../../components/InputComponent";
import { useAuth } from "../../contexts/auth";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const signInSchema = yup.object({
  email: yup.string().required("Enter the email").email("Invalid email"),
  password: yup
    .string()
    .required("Enter the password")
    .min(8, "Password must be at least 8 digits long"),
});

const SignIn = () => {
  const { signIn } = useAuth();
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const handleLogin = (data) => {
    try {
      signIn(data)
      // Lógica para autenticar o usuário com o email e senha fornecidos
      // Aqui você pode fazer uma chamada a uma API ou implementar sua própria lógica de autenticação
    } catch (error) {
      console.error(error);
      // Trate o erro aqui, como mostrar uma mensagem de erro ao usuário
    }
  };

  return (
    <ScrollView style={styles.container}>
      <VStack>
        <Text style={styles.h1}>Sign in to</Text>
        <Text style={styles.h2}>Lorem Ipsum is simply</Text>
        <Text style={styles.h3}>If you already have an account register</Text>
        <HStack>
          <Text style={styles.h3}>You can </Text>
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text style={styles.h3green}> Register here !</Text>
          </TouchableOpacity>
        </HStack>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              style={styles.input}
              placeholder="Enter email or user name"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
              fontFamily="body"
              returnKeyType="send"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              style={styles.input}
              placeholder="Password"
              onChangeText={onChange}
              secureTextEntry
              value={value}
              errorMessage={errors.password?.message}
              fontFamily="body"
              returnKeyType="send"
            />
          )}
        />
        <Button
          style={{
            backgroundColor: "FFFFFF",
            color: "FFFFFF",
          }}
          title="Entrar"
          onPress={handleSubmit(handleLogin)}
        />

        <Text style={styles.h4}>Forgor password ?</Text>

        <Center>
          <Text style={styles.h3Center}>or continue with</Text>

          <TouchableOpacity onPress={handleSubmit(handleLogin)}>
            <Image
              style={{
                marginTop: 30,
                marginBottom: 50,
              }}
              source={require("../../../assets/images/GoogleIcon.png")}
            />
          </TouchableOpacity>
        </Center>
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
    paddingHorizontal: 20,
  },

  entrar: {
    backgroundColor: "#23B198",
    width: "100%",
    height: 62,
  },
});

export default SignIn;
