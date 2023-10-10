import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center } from "native-base";



const Profile = () => {

    const { navigate } = useNavigation();


    return (
        <VStack style={styles.container}>

            <TouchableOpacity onPress={() => navigate("Home")} style={styles.return}>
                <Image source={require("../../../assets/images/Vector.png")} />
            </TouchableOpacity>
            <Text style={styles.h1}>Profile</Text>

            <VStack style={styles.profileAlign}>
                <Image source={require("../../../assets/images/profilePhoto.png")} />

                <HStack style={styles.nameEdit}>
                    <Text style={styles.h1}>Douglas Doce</Text>

                    <TouchableOpacity>
                        <Image
                            style={{
                                marginTop: 25,
                            }}
                            source={require("../../../assets/images/Pensil.png")} />
                    </TouchableOpacity>
                </HStack >

            </VStack >

            <TouchableOpacity onPress={() => navigate("SignUp")}>
                <Text style={styles.exit}>Log Out</Text>
            </TouchableOpacity>

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
        paddingTop: 40,
    },
    exit: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7E1515",
        paddingTop: 40,
        marginTop: 200,
    },
    return: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBlockColor: "#1A282D",
    },
    profileAlign: {
        justifyContent: "center",
        alignItems: "center",

    },
    nameEdit: {
        width: '75%',
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBlockColor: "#FFFFFF",
    },

});


export default Profile;
