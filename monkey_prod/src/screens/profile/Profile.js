import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Text, Center } from "native-base";
import * as ImagePicker from 'expo-image-picker';




const Profile = () => {

    const { navigate } = useNavigation();

    const [foto, setFoto] = useState(null);


    useEffect(() => {
        // Solicitar permissão para acessar a câmera e a galeria de fotos
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Desculpe, precisamos de permissão para acessar a câmera e a galeria de fotos.');
            }
        })();

    }, []);


    const handleEscolherFoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setFoto(result.uri);
        }
    };

    const handleTirarFoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setFoto(result.uri);
        }
    };


    return (
        <VStack style={styles.container}>

            <HStack style={styles.navigateHeader}>
                <TouchableOpacity onPress={() => navigate("Home")} style={styles.return}>
                <Image source={require("../../../assets/images/Vector.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Settings")}>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            alignContent: 'flex-end',
                        }}
                        source={require("../../../assets/images/white-gear-icon-png.jpg")} />
                </TouchableOpacity>
            </HStack >





            <Text style={styles.h1}>Profile</Text>

            <VStack style={styles.profileAlign}>

                <TouchableOpacity onPress={handleTirarFoto} style={styles.foto}>

                    {foto && <Image source={{ uri: foto }} style={styles.fotoProfile} />}
                </TouchableOpacity>


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
        marginTop: 150,
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
    navigateHeader: {
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBlockColor: "#1A282D",
    },
    bottonNav: {
        marginTop: 100,
        height: 100,
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
    },
    foto: {
        width: 150,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 150,
        alignItems: "center",
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBlockColor: "#FFFFFF",
    },
    fotoProfile: {
        width: 150,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 150,
        alignItems: "center",
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBlockColor: "#FFFFFF",
    },

});


export default Profile;
