import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Image, Switch, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center } from "native-base";



const Settings = () => {

    const { navigate } = useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const alternateSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }


    return (
        <ScrollView style={styles.container}>
            <VStack >

                <HStack style={styles.header}>
                    <TouchableOpacity onPress={() => navigate("Home")} style={styles.return}>
                        <Image source={require("../../../assets/images/Vector.png")} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate("Profile")}>
                        <Image

                            source={require("../../../assets/images/ProfileImage.png")} />
                    </TouchableOpacity>
                </HStack >

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

                    </HStack >
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

                    </HStack >
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

                    </HStack >
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

                    </HStack >

                </VStack>

                <VStack style={styles.repository}>
                    <TouchableOpacity>
                        <Text style={styles.h2}>Bind Repository API Key</Text>
                    </TouchableOpacity>
                </VStack>

                <TouchableOpacity style={styles.unbind}>
                    <Text style={styles.h4}>Unbind Repo</Text>

                </TouchableOpacity>


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
});


export default Settings;
