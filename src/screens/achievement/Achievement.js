import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const Achievement = () => {

    const navigation = useNavigation();

    const handleButton = () => {
        navigation.navigate("Bilet Sorgulama");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Biletiniz Alınmıştır. İyi Yolculuklar!</Text>
            <CustomButton buttonTitle={"Ana Sayfaya Dön"} onPress={handleButton} />
        </View>
    )
}

export default Achievement;
